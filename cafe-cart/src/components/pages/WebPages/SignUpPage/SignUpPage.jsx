import {React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/UserAuthContext";
import * as styled from './SignUpPage.styles'

const SignUpPage =({}) => {
    
    const signupUsernameRef = useRef(null);
    const signUpPasswordRef = useRef(null);
    const signUpConfirmPasswordRef = useRef(null);

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpass, setConfirmpass] = useState("");
    //To properly trigger debounce UseEffects
    const [inputValues, setInputValues] = useState({
        emailorusername: "",
        password: "",
        confirmpassword: "",
    });
    const { signUp } = useAuth();
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
            placeholderText: signUpInput.label,
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
        setError("");
        try {
            if(password === confirmpass) {
                await signUp(email, password);
                navigate("/");
            } else if (password !== confirmpass) {
                setError("Password does not match!")
            }
        } catch (err) {
            setError(err.message);
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
                submitText={"Confirm"}
                handleSubmit={handleSignupSubmit}
                hasCancel
                cancelText={"Login"}
            />
        </styled.SignUpPageWrapper>
    )
}

export default SignUpPage;