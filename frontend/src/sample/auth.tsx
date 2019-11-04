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

export const AuthButton = () => {
  const [user, setUser] = React.useState<User | null | "Loading">("Loading");
  React.useEffect(() => {
    const redirectResult = firebase.auth().getRedirectResult();
    redirectResult.then(result => {
      if (result.credential) {
        axios
          .post("http://localhost:8000/auth", {
            credential: result.credential.toJSON()
          })
          .then(res => {
            setUser(res.data);
          });
      } else {
        setUser(null);
      }
    });
  }, []);
  const redirect = () => {
    setUser("Loading");
    firebase.auth().signInWithRedirect(provider);
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
      </section>
    )
  ) : (
    <Button onClick={redirect}>Login With Google</Button>
  );
};
