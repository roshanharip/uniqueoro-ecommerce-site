import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// API KEY OF FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyAhoX3OJKbvnst1qnqXwqhUhj5Yt2tZzhE",
  authDomain: "uniqueoro.firebaseapp.com",
  projectId: "uniqueoro",
  storageBucket: "uniqueoro.appspot.com",
  messagingSenderId: "56907124564",
  appId: "1:56907124564:web:4d67d56f21b10448a802c1"
};
// Initialize Firebase
initializeApp(firebaseConfig);
// Providing Google Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
   prompt : "Select Account"
});
// creating authentication from firebase
export const auth = getAuth();
//  popup google new window for authentication
export const signInWithGooglePopup =()=> signInWithPopup(auth,googleProvider);
// creating database in firebase or collection

export const db = getFirestore();
//  creating document in colletion
export const userDoc = async (userAuth,additinalInformation={}) => {
  //  reference of user document
  const userDocRef = doc(db, 'user', userAuth.uid);
  // accessing the data from FireBase
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()){
    const createdDate = new Date();
    const {displayName, email, phoneNumber}= userAuth;
    try{
      await setDoc(userDocRef,{
        displayName,email,phoneNumber,createdDate,...additinalInformation
      });
    }catch(err){
      console.log("error by the user please check",err.message);
    }
  }
  return userDocRef;
};
export const createUserAuthEmailAndPassword = async(email,password)=> {
  if(!email && !password) return;
  return await createUserWithEmailAndPassword(auth,email,password);
};
export const signinUserAuthEmailAndPassword = async(email,password)=> {
  if(!email && !password) return;
  return await signInWithEmailAndPassword(auth,email,password);
};
export const sendUserPasswordResetEmail = async(email) =>{
   await sendPasswordResetEmail(auth,email);
   console.log("check your Email  "); 
};  
export const signOutUser = async() => await signOut(auth);
export const onUserAuthStateChanged = (callback) => {
  onAuthStateChanged(auth,callback);
}