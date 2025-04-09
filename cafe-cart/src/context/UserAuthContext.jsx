import React, { createContext, useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import { auth, db } from "../backend/firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null); //check if null to determine if new user to set tbe save button only present when directed to user information page
    const [loading, setLoading] = useState(true);

    //Login using registered and verified email
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //Sign up using email
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //Send a verification link to the registered/signed up email
    const verifyEmail = (user) => {
        return sendEmailVerification(user);
    }
    //log out current logged user
    const logOut = () => {
        setUserProfile(null);
        return signOut(auth);
    }

    //sign in using Google Account
    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    // Save User Profile to Firestore
    const saveUserProfile = async (data) => {
        const uid = auth.currentUser.uid;
        await setDoc(doc(db, "users", uid), data, { merge: true }); //merge: true updates only the data that are touched
      };

    // Get User Profile from Firestore
    const getUserProfile = async (uid) => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUserProfile(docSnap.data());
        } else {
            setUserProfile(null);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setCurrentUser(user); //object when user is logged in else null
            if (user) await getUserProfile(user.uid); //If there is a user getUserProfile of its uid
            setLoading(false); //Stop any loaders
        });
    
        return unsubscribe; // cleanup listener on component unmount
    }, []);

    return (
        <UserAuthContext.Provider 
            value={{ 
                logIn, signUp, verifyEmail, logOut, googleSignIn, saveUserProfile, getUserProfile, //firebase functions
                loading, currentUser, userProfile //declared states, custom usehooks and functions
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