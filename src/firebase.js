import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyA-dr1KRIQGcSv4yVSt23xGK3gZm6l2EuQ",
  authDomain: "cricgeek-c8faa.firebaseapp.com",
  projectId: "cricgeek-c8faa",
  storageBucket: "cricgeek-c8faa.appspot.com",
  messagingSenderId: "193923073899",
  appId: "1:193923073899:web:51edf2400c6dd35182ae2e"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db= getFirestore(app);
const signup=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user= res.user;
        await addDoc(collection(db,"users"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,


        })

        
}
catch(error){
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));


}}
const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);

    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
};
const logout=()=>{
    signOut(auth);
}
export {auth,signup,login,logout};