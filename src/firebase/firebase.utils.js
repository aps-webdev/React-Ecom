import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA9TA27Ms-OqGIOnLHYAGM7t-j5-LsiAsg',
  authDomain: 'react-ecom-9178b.firebaseapp.com',
  projectId: 'react-ecom-9178b',
  storageBucket: 'react-ecom-9178b.appspot.com',
  messagingSenderId: '359101604777',
  appId: '1:359101604777:web:04ef3204e4c805bb78dab8',
  measurementId: 'G-BZZJ7MEHQH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
