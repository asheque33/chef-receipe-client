import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config.js';

export const AuthContext = createContext(null)
const auth = getAuth(app);

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
        signIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;