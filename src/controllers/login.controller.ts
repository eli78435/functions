import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as admin from 'firebase-admin';
import { Request, Response, Router as expressRouter } from 'express';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCQj6n-WsD-J4vU0fpsrNmb2pkDmv0cy1Q',
  authDomain: 'userseli-b12c2.firebaseapp.com',
  databaseURL: 'https://userseli-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'userseli',
  storageBucket: 'userseli.appspot.com',
  messagingSenderId: '1004394553119',
  appId: '1:1004394553119:web:6dbf299ef285c820c15a2a',
  measurementId: 'G-H3XSETTPDF',
};

const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const loginRouter = expressRouter();

const auth = getAuth(firebaseApp);

loginRouter.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Missing fields');
  }

  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    const token = await admin.auth().createCustomToken(userCredentials.user.uid);
    return res.send({ token });
  } catch (e) {
    return res.status(400).send(`Invalid credentials ${e}`);
  }

  res.send('no users yet');
});

export default loginRouter;
