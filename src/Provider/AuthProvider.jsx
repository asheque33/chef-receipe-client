import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const  githubProvider = new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    };
    
    const handleGithubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    };
    
    const  createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        setLoading(true);
       return signOut(auth);
    };
    

    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
    console.log(loggedUser);
    setUser(loggedUser);
    setLoading(false) })
    
    return () => { unsubscribe() }

    },[])
 

    const AuthInfo = {
        user,
        createUser,
        signIn,
        logOut,
        loading,
        handleGoogleSignIn,
        handleGithubSignIn,
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;