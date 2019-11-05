import firebaseConfig from "../../config/firebase-project.json";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import styled from "@emotion/styled";

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

interface User {
  email: string;
  displayName: string;
  photoURL: string;
}

type UserState = User | null | "Loading";

const Button = styled.button`
  background-color: #00cccc;
  color: white;
  padding: 8px;
  margin: 5px;
  border-radius: 5px;
  outline: none;
  :active {
    background-color: #00aaaa;
  }
`;

const testes = async (setUser: (user: UserState) => void) => {
  await firebase.auth().getRedirectResult();
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    const { photoURL, email, displayName } = currentUser;
    if (photoURL && email && displayName) {
      setUser({
        photoURL,
        email,
        displayName
      });
    } else {
      console.error(currentUser);
      throw new Error("Error");
    }
    console.log("Start:getIdToken", new Date());
    const idToken = await currentUser.getIdToken();
    console.log("Done:getIdToken", new Date());
    const verifyResult = await axios.get("http://localhost:8000/verify", {
      headers: {
        Authorization: idToken
      }
    });
    console.log(verifyResult.data);
  } else {
    setUser(null);
  }
};

export const AuthButton = () => {
  const [user, setUser] = React.useState<User | null | "Loading">("Loading");
  React.useEffect(() => {
    testes(setUser);
  }, []);
  const redirect = () => {
    setUser("Loading");
    firebase.auth().signInWithRedirect(provider);
  };
  const logout = () => {
    firebase.auth().signOut();
    setUser(null);
  };
  return user ? (
    user === "Loading" ? (
      <p>Loading...</p>
    ) : (
      <section>
        <div>User Info</div>
        <div>
          <div>
            <b>User: </b>
            {user.displayName}
          </div>
          <div>
            <b>E-mail: </b>
            {user.email}
          </div>
        </div>
        <img style={{ height: "100px" }} src={user.photoURL}></img>
        <div>
          <Button onClick={logout}>Logout</Button>
        </div>
      </section>
    )
  ) : (
    <Button onClick={redirect}>Login With Google</Button>
  );
};
