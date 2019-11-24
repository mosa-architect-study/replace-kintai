import express from "express";
import cors from "cors";
import Admin from "firebase-admin";

const admin = Admin.initializeApp();
console.log("FIREBASE_CONFIG", process.env.FIREBASE_CONFIG);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/verify", async (req, res) => {
  const idToken = req.header("Authorization");
  if (idToken) {
    console.log("Verify...", new Date());
    const decoded = await admin.auth().verifyIdToken(idToken);
    console.log("Verified!", new Date(), decoded.uid);
    res.json(decoded);
  }
  res.status(403).send();
});

app.listen(8080, () => {
  console.log("Server is running!!");
});

export default app;
