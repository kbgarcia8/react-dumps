import React, { createContext, useState, useEffect, useContext, useRef } from "react"
import PropTypes from "prop-types"
import { auth, db } from "../backend/firebase/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null); 
    const [authLoading, setAuthLoading] = useState(true); //state for Firebase initialization
    const [loading, setLoading] = useState(true);

    const isProfileIncompleteOrNull = (profile) => {
        const profileKeysNeeded = Object.keys(profile).filter((entry) => entry != "photoURL")
        return profileKeysNeeded.some((profileKey) => profile[profileKey] === "")
    }

    useEffect(()=>{
            {/*console.log("userProfile:");
            console.dir(userProfile, { depth: null, colors: true });
            console.log("currentUser:");
            console.dir(currentUser, { depth: null, colors: true })*/}
    },[userProfile, currentUser])
      

    //Login using registered and verified email
    const logIn = async (email, password) => {        
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedUser = userCredential.user
      if (!loggedUser.emailVerified) {
          throw new Error("Please verify your email before logging in.");
        }
      
      const uid = loggedUser.uid;
      console.log(uid)
      
      // Check if user profile exists
      const profile = await getUserProfile(uid);
      
      if (isProfileIncompleteOrNull(profile)) {
          toast.warn("Profile is incomplete. Redirecting to settings to complete your information.");
          setUserProfile(profile); // Keep it as-is so the user data still exists                
          return {userCredential, profileIncomplete: true};
      }

      setUserProfile(profile); // Set user profile if exists
      return {userCredential, profileIncomplete: false}; // Return the user credential after successful login
    };
    //Sign up using email
    const signUp = async (email, password) => {
        try{
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user; // use this instead of currentUser

          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            photoURL: user.photoURL || "",
            fullname: "",
            birthdate: "",
            username: "",
            createdAt: new Date(),
            lastEdit: "",
            userAddressBank: [],
            orderHistoryBank: []
          });

          return userCredential;
        } catch (error) {
          console.error("Sign up failed:", error.message);
          toast.error(error.message || "Sign-up failed. Please try again.");
          throw error;
        }
    };
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
            const profile = await getUserProfile(uid);
            if (isProfileIncompleteOrNull(profile)) {
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
        const user = auth.currentUser;
        if (!user || !user.uid) throw new Error("No authenticated user found.");
        if (!data || typeof data !== 'object') throw new Error("Invalid data to save");
    
        await setDoc(doc(db, "users", user.uid), data, { merge: true });
      } catch (error) {
        //toast.error("Failed to save user profile or merge provided data");
        toast.error(error.message);
        throw error; // Let toast.promise catch this too
      }
    };

    // Get User Profile from Firestore
    const getUserProfile = async (uid) => {
        const docRef = doc(db, "users", uid);
        try {
          const cachedSnap = await getDoc(docRef, { source: "cache" });
          if (cachedSnap.exists()) {
            console.log("From cache:", cachedSnap.data());
            return cachedSnap.data();
          } else {
            console.warn("No profile in cache");
          }
        } catch (error) {
          console.warn("Cache fetch failed:", error.message);
        }
      
        if (!navigator.onLine) {
          throw new Error("You're offline and this profile hasn't been cached yet.");
        }
      
        try {
          const serverSnap = await getDoc(docRef);
          if (serverSnap.exists()) {
            console.log("From server:", serverSnap.data());
            return serverSnap.data();
          } else {
            //throw new Error("User profile not found.");
            return null;
          }
        } catch (error) {
          throw new Error("Error fetching user profile: " + error.message);
        }
    };
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);

      if (user) {
        try {
          const profile = await getUserProfile(user.uid);

          if (profile) {
            setUserProfile(profile);
          } else {
            console.warn("User profile missing, handle as needed");
            // Optionally, redirect or show a message
          }
        } catch (error) {
          console.error("Error fetching user profile:", error.message);
          toast.error("Unable to load your profile. Please check your internet or try again.");
        }
      }

      setLoading(false);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

    //onSnapshot() itself — once set — keeps running and watching the Firestore document in real time
    useEffect(() => {
        if (!currentUser?.uid || !navigator.onLine) return;
      
        const docRef = doc(db, "users", currentUser.uid);
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserProfile(docSnap.data());
          }
        }, (error) => {
          toast.error("Realtime listener failed:", error);
        });
      
        return () => unsubscribe();
      }, [currentUser]);
      

    return (
        <UserAuthContext.Provider 
            value={{ 
                logIn, signUp, verifyEmail, logOut, googleSignIn, saveUserProfile, getUserProfile, //firebase functions
                authLoading, loading, currentUser, userProfile, isProfileIncompleteOrNull //declared states, custom usehooks and functions
            }}
        > 
            {!authLoading && children}
        </UserAuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(UserAuthContext)}

UserAuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}