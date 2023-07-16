import React, { createContext } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const  githubProvider = new GithubAuthProvider();

const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
};

const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
};

const  createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({children}) => {
    const user = null;
    const AuthInfo = {
        user,
        createUser,
        signIn,
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