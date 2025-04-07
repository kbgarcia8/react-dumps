import React, { createContext, useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import { auth } from "../backend/firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const UserAuthContext = createContext();

const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}
const verifyEmail = (user) => {
    return sendEmailVerification(user);
}
const logOut = () => {
    return signOut(auth);
}
const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
}

export const UserAuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const handleUsernameEmailChange = (e) => {console.log(usernameRef.current.value)}
    const handlePasswordChange = (e) => {console.log(passwordRef.current.value)}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });
    
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserAuthContext.Provider 
            value={{ 
                user, logIn, signUp, verifyEmail, logOut, googleSignIn, //firebase functions
                usernameRef, passwordRef, handleUsernameEmailChange, handlePasswordChange //custom usehooks and functions
            }}
        > 
            {children}
        </UserAuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(UserAuthContext)}

UserAuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}