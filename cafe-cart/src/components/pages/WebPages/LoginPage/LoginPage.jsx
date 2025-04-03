import {React, useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import * as styled from './LoginPage.styles'

const LoginPage =({}) => {

    const loginPageInputHeaders = [
        {
            label: "Email or Username",
            type: "text"
        }, 
        {
            label: "Password",
            type: "password"
        }];

    const loginPageInputs = useMemo(()=> {
        return loginPageInputHeaders.map((loginInput, index) => ({
            labelText: `${loginInput.label}\n`,
            //additionalInfo: '',
            labelDirection: "column",
            id: `login-${loginInput.label}-input`,
            placeholderText: loginInput.label,
            editable: false,
            mainOnChange: () => {},
            type: loginInput.type,
            isRequired: true,
            //data: addressEntry,
            dataAttributes: {
                "data-input": index
            }
        }))
    }, [])

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