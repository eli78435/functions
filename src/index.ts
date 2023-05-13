import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

import loginRouter from './controllers/login.controller';
import userRouter from './controllers/users.controller';

functions.logger.debug('start application');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});


const app = express();
app.use(cors({ origin: true }));
// functions.logger.debug('init application');

// const authenticate = async (req: any, res: any, next: any) => {
//   if (
//     !req.headers.authorization ||
//     !req.headers.authorization.startsWith("Bearer ")
//   ) {
//     res.status(403).send("Unauthorized");
//     return;
//   }

//   const idToken = req.headers.authorization.split("Bearer ")[1];
//   try {
//     const decodedIdToken = await admin.auth().verifyIdToken(idToken);
//     req.user = decodedIdToken;
//     next();
//   } catch (e) {
//     res.status(403).send("Unauthorized");
//   }
// };

// app.use(authenticate);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/login', loginRouter);

app.use('/users', userRouter);

// export const helloWorld = functions.https.onRequest((req, res) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   res.send("Hello from Firebase!");
// });

// Expose the API as a function
export const api = functions.https.onRequest(app);
