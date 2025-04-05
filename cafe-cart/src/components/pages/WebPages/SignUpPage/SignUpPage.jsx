import {React, useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../../../context/UserAuthContext";
import * as styled from './SignUpPage.styles'

const SignUpPage =({}) => {
    const {
        usernameRef,
        passwordRef,
        handleUsernameEmailChange,
        handlePasswordChange,
    } = useAuth();

    const signUpPageInputHeaders = [
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
        },
        {
            label: "Confirm Password",
            type: "password",
            refType: "password",
            handlechange: handlePasswordChange
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
            ref: signUpInput.refType === "username" ? usernameRef : passwordRef,
            dataAttributes: {
                "data-input": `${signUpInput.label}`
            }
    }))

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
                hasCancel
                cancelText={"Login"}
            />
        </styled.SignUpPageWrapper>
    )
}

export default SignUpPage;