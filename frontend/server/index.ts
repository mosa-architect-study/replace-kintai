import firebase from "firebase/app";
import express from "express";
import cors from "cors";
import firebaseConfig from "../config/firebase-project.json";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/auth", async (req, res) => {
  const cred = firebase.auth.GoogleAuthProvider.credential(
    req.body.credential.oauthIdToken
  );
  const auth = await firebase.auth().signInWithCredential(cred);
  const { user } = auth;
  if (user) {
    const { email, uid, displayName, photoURL } = user;
    console.log("Login!", email, uid, displayName);
    res.json({ email, displayName, photoURL });
  }
});

app.listen(8000, () => {
  console.log("server");
});

export default app;
