import * as admin from 'firebase-admin';

const handleError = (res: any, err: any) => {
  res.status(500).send({ message: `${err.code} - ${err.message}` });
};

export const create = async (req: any, res: any) => {
  const { displayName, password, email, role } = req.body;
  if (!displayName || !password || !email || !role) {
    return res.status(400).send({ message: 'Missing fields' });
  }

  try {
    const { uid } = await admin.auth().createUser({
      email,
      displayName,
      password,
    });
    await admin.auth().setCustomUserClaims(uid, { role });
    return res.status(201).send({ uid });
  } catch (e) {
    handleError(res, e);
  }
};
