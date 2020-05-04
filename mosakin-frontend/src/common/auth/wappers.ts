import firebaseConfig from "../../config/firebase-project.json";
import firebase from "firebase/app";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

/**
 * Firebase Userを取得します
 */
export const getAuthorizedUser = (): Promise<firebase.User | null> => {
  const user = firebase.auth().currentUser;
  if (user) {
    return Promise.resolve(user);
  }
  return new Promise(resolve => {
    const unsubcribe = firebase.auth().onAuthStateChanged(_user => {
      resolve(_user);
      unsubcribe();
    });
  });
};

export const login = () => {
  firebase.auth().signInWithRedirect(provider);
};

export const logout = () => {
  firebase.auth().signOut();
};
