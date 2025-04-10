import React, { createContext, useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import { auth, db } from "../backend/firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null); //check if null to determine if new user to set tbe save button only present when directed to user information page
    const [loading, setLoading] = useState(true);

    const checkUserProfile = async (userId) => {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (!userDoc.exists()) {
            // If no profile exists, return null (incomplete profile)
            return null;
        }
        return userDoc.data(); // Return profile data if it exists
    };

    //Login using registered and verified email
    const logIn = async (email, password) => {
        try {
            // Perform login first
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
    
            // Check if user profile exists
            const profile = await checkUserProfile(uid);
            if (!profile || Object.values(profile).some(value => value != "")) {
                // If no profile exists, navigate to profile completion page
                toast.error("Profile is incomplete. Please complete your profile for smoother transactions.");
                setUserProfile(null); // Set null until user completes profile
                return; // Don't proceed with the login if profile is incomplete
            }
    
            setUserProfile(profile); // Set user profile if exists
            return userCredential; // Return the user credential after successful login
        } catch (error) {
            toast.error(error.message || "Login failed");
            throw error; // Rethrow error to be handled by caller
        }
    };
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
    const googleSignIn = async () => {
        try {
            // Perform Google sign-in first
            const result = await signInWithPopup(auth, new GoogleAuthProvider());
            const uid = result.user.uid;
    
            // Check if user profile exists
            const profile = await checkUserProfile(uid);
            if (!profile || Object.values(profile).some(value => value != "")) {
                // If no profile exists, navigate to profile completion page
                toast.error("Profile is incomplete. Please complete your profile for smoother transactions.");
                setUserProfile(null); // Set null until user completes profile
                return; // Don't proceed if profile is incomplete
            }
    
            setUserProfile(profile); // Set user profile if exists
            return result; // Return the result after successful Google sign-in
        } catch (error) {
            toast.error(error.message || "Google Sign-In failed");
            throw error; // Rethrow error to be handled by caller
        }
    };

    // Save User Profile to Firestore
    const saveUserProfile = async (data) => {
        try {
            const uid = auth.currentUser.uid;
            await setDoc(doc(db, "users", uid), data, { merge: true }); //merge: true updates only the data that are touched
        } catch (error) {
            toast.error("Failed to save user profile or merge provided data");
        }
        
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