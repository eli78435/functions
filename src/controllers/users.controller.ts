import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Request, Response, Router as expressRouter } from 'express';

const userRouter = expressRouter();

const authenticate = async (req: any, res: any, next: any) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer ')
  ) {
    res.status(403).send('Unauthorized');
    return;
  }

  const idToken = req.headers.authorization.split('Bearer ')[1];
  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
  } catch (e) {
    res.status(403).send('Unauthorized');
  }
};

functions.logger.debug('users router use authenticate');
userRouter.use(authenticate);

userRouter.get('/', async (req: Request, res: Response) => {
  res.send('no users yet');
});
functions.logger.debug('users router listen to /');

export default userRouter;
