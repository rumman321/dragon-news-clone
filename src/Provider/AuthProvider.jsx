
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { createContext, useEffect, useState } from "react";

// createContext for data passing
export const AuthContext=createContext()


const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)
    // console.log(user)

    // new user
    const createNewUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    // user signIn
    const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user update
    const unDateUserProfile=(undatedData)=>{
        return updateProfile(auth.currentUser,undatedData)
    }

    // user singOUT

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    

    const authInfo={
        user,
        setuser,
        createNewUser,
        logOut,
        userSignIn,
        loading,
        unDateUserProfile,

    }

    // user data save
    useEffect(()=>{
        const unScribe= onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unScribe()
        }
    },[])
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;