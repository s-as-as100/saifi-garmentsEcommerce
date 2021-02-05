import firebase from'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD5d0SSaQMHbizLY2SSa-TNKweYp14fteo",
    authDomain: "garment-sf.firebaseapp.com",
    projectId: "garment-sf",
    storageBucket: "garment-sf.appspot.com",
    messagingSenderId: "393691155988",
    appId: "1:393691155988:web:8bb4848ad83f4ab670a101",
    measurementId: "G-LH77CWW0X1"
  };

  firebase.initializeApp(config);


  export const auth =firebase.auth();
  //export const firebase = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;












