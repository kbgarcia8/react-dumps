import {React, useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../../context/UserAuthContext";
import GoogleButton from 'react-google-button';
import * as styled from './LoginPage.styles'

const LoginPage =({}) => {

    const loginUsernameRef = useRef(null);
    const loginPasswordRef = useRef(null);

    const loginPageInputHeaders = [
        {
            label: "Email or Username",
            type: "text",
            refType: loginUsernameRef,
            handlechange: () => {}
        }, 
        {
            label: "Password",
            type: "password",
            refType: loginPasswordRef,
            handlechange: () => {}
        }
    ];

    const loginPageInputs = loginPageInputHeaders.map((loginInput) => ({
            labelText: `${loginInput.label}\n`,
            labelDirection: "column",
            id: `login-${loginInput.label}-input`,
            placeholderText: `Your ${loginInput.label}`,
            editable: false,
            mainOnChange: loginInput.handlechange, //use useRef in login then use useState in sign up
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
    const handleLoginSubmit = async (e) => {}

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("/home");
        } catch (error) {
          console.log(error.message);
        }
    };

    return(
        <styled.LoginPageWrapper>
            <styled.LoginPageHeader>
                Welcome to Kain at Kape Website! Please Login to continue.
            </styled.LoginPageHeader>
            <styled.LoginForm
                fieldHeight={"50vh"}
                id={"main-login-form"}
                formInputs={loginPageInputs}
                labelClassName={"login-inputs-label"}
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