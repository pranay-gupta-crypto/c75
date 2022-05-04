import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDf5J5KNQ-B_XU0ehvHn9UNxu_mPnmmuks",
  authDomain: "c71-22a39.firebaseapp.com",
  projectId: "c71-22a39",
  storageBucket: "c71-22a39.appspot.com",
  messagingSenderId: "862976015983",
  appId: "1:862976015983:web:09a56d74eb96bf54bc979a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
