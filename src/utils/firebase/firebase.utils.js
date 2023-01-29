import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBzGcwGXKmLALqAhrUhHB055dwuSDYFWgQ",
  authDomain: "crwn-clothing-db-ed126.firebaseapp.com",
  projectId: "crwn-clothing-db-ed126",
  storageBucket: "crwn-clothing-db-ed126.appspot.com",
  messagingSenderId: "268644937518",
  appId: "1:268644937518:web:3dbf1037367ec5e3d214bf",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
   console.log(userSnapshot.exists())
//if it does not exist, create it
   if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date()

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(error){
      console.log('error creating the user', error.message)
    }
   }
   return userDocRef
}