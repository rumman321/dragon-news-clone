import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

// createContext for data passing
export const AuthContext=createContext()


const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    console.log(user)

    // new user
    const createNewUser= (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user signIn
    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // user singOUT

    const logOut=()=>{
        return signOut(auth)
    }
    
    

    const authInfo={
        user,
        setuser,
        createNewUser,
        logOut,
        userSignIn,

    }

    // user data save
    useEffect(()=>{
        const unScribe= onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser)
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