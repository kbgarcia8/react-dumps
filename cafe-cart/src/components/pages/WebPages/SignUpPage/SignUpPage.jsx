import {React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/UserAuthContext";
import * as styled from './SignUpPage.styles'

const SignUpPage =({}) => {
    
    const signupUsernameRef = useRef(null);
    const signUpPasswordRef = useRef(null);
    const signUpConfirmPasswordRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    //To properly trigger debounce UseEffects
    const [inputValues, setInputValues] = useState({
        emailorusername: "",
        password: "",
        confirmpassword: "",
    });
    const { signUp, verifyEmail } = useAuth();
    let navigate = useNavigate();

    const handleUsernameEmailSignUpChange = (e) => {
        const { input } = e.currentTarget.dataset;
        signupUsernameRef.current = e.target.value;
        setInputValues((prevInputValues) => ({...prevInputValues, [input]: signupUsernameRef.current}))
    };
    const handlePasswordSignUpChange = (e) => {
        const { input } = e.currentTarget.dataset;
        signUpPasswordRef.current = e.target.value;
        setInputValues((prevInputValues) => ({...prevInputValues, [input]: signUpPasswordRef.current}))
    };
    const handleConfirmPasswordChange = (e) => {
        const { input } = e.currentTarget.dataset;
        signUpConfirmPasswordRef.current = e.target.value;
        setInputValues((prevInputValues) => ({...prevInputValues, [input]: signUpConfirmPasswordRef.current}))
    };
    
    // Debounce effect → Only update state if user stops typing for 1000ms
    useEffect(() => {
    const timeout = setTimeout(() => {
        setEmail(signupUsernameRef.current);
    }, 1000);
    
    return () => clearTimeout(timeout);
    }, [inputValues.emailorusername]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPassword(signUpPasswordRef.current);
        }, 1000);
        
        return () => clearTimeout(timeout);
    }, [inputValues.password]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setConfirmpass(signUpConfirmPasswordRef.current);
    }, 1000);
    
        return () => clearTimeout(timeout);
    }, [inputValues.confirmpassword]);

    const signUpPageInputHeaders = [
        {
            label: "Email or Username",
            type: "text",
            refType: signupUsernameRef,
            handlechange: handleUsernameEmailSignUpChange
        }, 
        {
            label: "Password",
            type: "password",
            refType: signUpPasswordRef,
            handlechange: handlePasswordSignUpChange
        },
        {
            label: "Confirm Password",
            type: "password",
            refType: signUpConfirmPasswordRef,
            handlechange: handleConfirmPasswordChange
        },
    ];

    const signUpPageInputs = signUpPageInputHeaders.map((signUpInput) => ({
            labelText: `${signUpInput.label}\n`,
            labelDirection: "column",
            id: `signup-${signUpInput.label}-input`,
            placeholderText: signUpInput.label === "Confirm Password" ? "Re-type Password" : `Your ${signUpInput.label}`,
            editable: false,
            mainOnChange: signUpInput.handlechange, //use useRef in signup then use useState in sign up
            type: signUpInput.type,
            isRequired: true,
            ref: signUpInput.refType,
            dataAttributes: {
                "data-input": `${signUpInput.label.toLowerCase().replace(/\s+/g, '')}`
            }
    }))

    const handleSignupSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmpass) {
            toast.error("Password does not match!");
            return
        }

        try {
            await toast.promise(
                (async () => {
                    const signupCredentials = await signUp(email, password);
                    const signedupUser = signupCredentials.user;

                    await verifyEmail(signedupUser);

                    return signupCredentials;
                    
                })(),{
                    loading: 'Signing Up...',
                    success: 'Verification email sent! Please check your inbox and confirm to Login!',
                    error: (err) => err || "Signup failed"
                }
            )
        } catch(error) {
            console.log(error.message)
            //toast.error(error.code)
            if (error.code === 'auth/invalid-email') {
                toast.error("Invalid Email Format");
              } else if (error.code === 'auth/email-already-in-use') {
                toast.error("Email already registered");
              } else if (error.code === 'auth/weak-password') {
                toast.error("Password too weak");
              } else {
                toast.error("Signup failed");
              }
        }
    };

    return(
        <styled.SignUpPageWrapper>
            <styled.SignUpPageHeader>
                Welcome to Kain at Kape Website! Please SignUp to continue.
            </styled.SignUpPageHeader>
            <styled.SignUpForm
                fieldHeight={"50vh"}
                id={"main-signup-form"}
                formInputs={signUpPageInputs}
                labelClassName={"signup-inputs-label"}
                hasSubmit
                submitText={"Sign Up"}
                handleSubmit={handleSignupSubmit}
            />
            <styled.LoginMessageSpace>
                <styled.LoginMessage>
                    Already have an account? <styled.LoginLink  to={`../login`}>{"Login"}</styled.LoginLink> 
                </styled.LoginMessage>
            </styled.LoginMessageSpace>
        </styled.SignUpPageWrapper>
    )
}

export default SignUpPage;