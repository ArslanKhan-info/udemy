import { db} from "db"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { toast } from "react-toastify";




const createProfile =(profileData)=>{
    db
      .collection('profiles')
      .doc(profileData.uid)
      .set(profileData)
  }
  
export const Register =async ({email,password,fullName,avatar})=>{
    try{
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        const userProfile= {uid:res.user.uid,fullName,email,avatar,services:[],description:''}
        createProfile(userProfile)
        return userProfile
    }
    catch(error){
        throw error.message
    }
}

export const Login =async ({email,password,fullName,avatar})=>{
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
        return res
    }
    catch(error){
        throw error.message
    }
}

export const Logout =async ()=>{
    try{
        const res = await firebase.auth().signOut()
        return res
    }
    catch(error){
        toast.error(error.message) 
    }
}

export const onAuthChange =(authuser)=> firebase.auth().onAuthStateChanged(authuser)

export const getAuthProfile =(uid)=>
    db
    .collection('profiles')
    .doc(uid)
    .get()
    .then(res=>({uid,...res.data()}))