import firebaseClient from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP,
};

if (firebaseClient.app.length) {
  firebaseClient.initializeApp(firebaseConfig);
}

var auth = firebaseClient.auth();
var provider = new firebaseClient.auth.GithubAuthProvider();
export {auth , provider};

export default firebaseClient;
