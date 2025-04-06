import {React, useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../../context/UserAuthContext";
import * as styled from './LoginPage.styles'

const LoginPage =({}) => {
    const {
        usernameRef,
        passwordRef,
        handleUsernameEmailChange,
        handlePasswordChange,
    } = useAuth();

    const loginPageInputHeaders = [
        {
            label: "Email or Username",
            type: "text",
            refType: "username",
            handlechange: handleUsernameEmailChange
        }, 
        {
            label: "Password",
            type: "password",
            refType: "password",
            handlechange: handlePasswordChange
        }
    ];

    const loginPageInputs = loginPageInputHeaders.map((loginInput) => ({
            labelText: `${loginInput.label}\n`,
            labelDirection: "column",
            id: `login-${loginInput.label}-input`,
            placeholderText: loginInput.label,
            editable: false,
            mainOnChange: loginInput.handlechange, //use useRef in login then use useState in sign up
            type: loginInput.type,
            isRequired: true,
            ref: loginInput.refType === "username" ? usernameRef : passwordRef,
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
                inputClassName={"login-inputs"}
                hasSubmit
                submitText={"Login"}
                hasCancel
                cancelText={"Sign Up"}
            />
        </styled.LoginPageWrapper>
    )
}

export default LoginPage;