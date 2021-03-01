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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
