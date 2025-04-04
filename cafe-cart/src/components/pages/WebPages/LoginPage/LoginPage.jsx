import {React, useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import * as styled from './LoginPage.styles'

const LoginPage =({}) => {    

    const loginPageInputHeaders = [
        {
            label: "Email or Username",
            type: "text",
        }, 
        {
            label: "Password",
            type: "password",
        }];

    const {
        usernameRef,
        passwordRef,
        handleLogin
    } = useOutletContext();

    const loginPageInputs = loginPageInputHeaders.map((loginInput, index) => ({
            labelText: `${loginInput.label}\n`,
            //additionalInfo: '',
            labelDirection: "column",
            id: `login-${loginInput.label}-input`,
            placeholderText: loginInput.label,
            editable: false,
            mainOnChange: handleLogin, //use useRef in login then use useState in sign up
            type: loginInput.type,
            isRequired: true,
            ref: loginInput.label.includes("Email") ? usernameRef : passwordRef,
            dataAttributes: {
                "data-input": `${loginInput.label}`
            }
        }))

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
                hasCancel
                cancelText={"Sign Up"}
            />
        </styled.LoginPageWrapper>
    )
}

export default LoginPage;