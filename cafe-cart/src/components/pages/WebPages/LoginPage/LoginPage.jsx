import {React, useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/UserAuthContext.jsx";
import GoogleButton from 'react-google-button';
import * as styled from './LoginPage.styles.js'

const LoginPage =({}) => {
    const { logIn, googleSignIn, userProfile } = useAuth();
    let navigate = useNavigate();

    const loginEmailRef = useRef(null);
    const loginPasswordRef = useRef(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputValues, setInputValues] = useState({
        email: "",
        password: "",
    });

    const handleEmailLoginChange = (e) => {
        const { input } = e.currentTarget.dataset;
        loginEmailRef.current = e.target.value;
        setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: loginEmailRef.current}))
    };
    const handlePasswordLoginChange = (e) => {
        const { input } = e.currentTarget.dataset;
        loginPasswordRef.current = e.target.value;
        setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: loginPasswordRef.current}))
    };
    
    // Debounce effect → Only update state if user stops typing for 1000ms
    useEffect(() => {
    const timeout = setTimeout(() => {
        setEmail(loginEmailRef.current);
    }, 1000);
    
    return () => clearTimeout(timeout);
    }, [inputValues.email]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPassword(loginPasswordRef.current);
        }, 1000);
        
        return () => clearTimeout(timeout);
    }, [inputValues.password]);

    const loginPageInputHeaders = [
        {
            label: "Email",
            type: "email",
            refType: loginEmailRef,
            handlechange: handleEmailLoginChange
        }, 
        {
            label: "Password",
            type: "password",
            refType: loginPasswordRef,
            handlechange: handlePasswordLoginChange
        }
    ];

    const loginPageInputs = loginPageInputHeaders.map((loginInput) => ({
            labelText: `${loginInput.label}\n`,
            labelDirection: "column",
            id: `login-${loginInput.label}-input`,
            placeholderText: `Your ${loginInput.label}`,
            editable: false,
            mainOnChange: loginInput.handlechange, 
            type: loginInput.type,
            isRequired: true,
            ref: loginInput.refType,
            dataAttributes: {
                "data-input": `${loginInput.label}`
            }
    }))

    const GoogleLoginButton = () => (
        <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
        />
    )
    //for submit of non-google login credentials
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const currentEmail = inputValues.email;
        const currentPassword = inputValues.password;

        try {
            const {userCredential, profileIncomplete} = await toast.promise(
                 logIn(currentEmail, currentPassword),                
                {
                    loading: 'Logging in...',
                    success: 'User Login successful',
                    error: (err) => err.message || 'Login failed'
                }
            )
            await new Promise((resolve) => setTimeout(resolve, 500));
            if(profileIncomplete) {
                navigate("../dashboard/settings");
            } else if (!profileIncomplete) {
                navigate("../dashboard")
            }

            loginEmailRef.current = "";
            loginPasswordRef.current = "";
    
        } catch (error) {
            toast.error(error.message);//custom message for every error.code just like in Sign Up
        }
    }    

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          userProfile === null? navigate("../dashboard/settings") : navigate("../dashboard");
        } catch (error) {
          alert(error.message);
        }
    };

    return(
        <styled.LoginPageWrapper>
            <styled.LoginPageHeader>
                Welcome to Kain at Kape Website! Login your account to continue.
            </styled.LoginPageHeader>
            <styled.LoginForm
                fieldHeight={"50vh"}
                id={"main-login-form"}
                formInputs={loginPageInputs}
                labelClassName={"login-inputs-label"}
                inputClassName={"login-inputs"}
                hasSubmit
                submitText={"Login"}
                handleSubmit={handleLoginSubmit}
                children={GoogleLoginButton()}
            />
            <styled.SignUpMessageSpace>
                <styled.SignUpMessage>
                    Don't have an account yet? <styled.SignUpLink  to={`../signup`}>{"Sign Up"}</styled.SignUpLink> 
                </styled.SignUpMessage>
            </styled.SignUpMessageSpace>
        </styled.LoginPageWrapper>
    )
}

export default LoginPage;