import {React, useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/UserAuthContext";
import GoogleButton from 'react-google-button';
import * as styled from './SettingsPage.styles'

const SettingsPage =({}) => {
    const { logIn, googleSignIn } = useAuth();
    let navigate = useNavigate();

    const profileUsernameRef = useRef(null);
    const profileNameRef = useRef(null);
    const profileBirthdateRef = useRef(null);
    const profileMainAddressRef = useRef(null);
    const profileMainContactNumberRef = useRef(null);

    const settingsPageInputHeaders = [
        {
            label: "Username",
            type: "text",
            refType: profileUsernameRef,
            handlechange: () => {},
            disabled: false
        }, 
        {
            label: "Full Name",
            type: "text",
            refType: profileNameRef,
            handlechange: () => {},
            disabled: false
        },
        {
            label: "Main Address",
            type: "text",
            refType: profileMainAddressRef,
            handlechange: () => {},
            disabled: false
        },
        {
            label: "Main Contact Number",
            type: "text",
            placeholder: "09XX-XXX-XXXX",
            refType: profileMainContactNumberRef,
            handlechange: () => {},
            disabled: false,
            pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}"
        },
        {
            label: "Birthdate",
            type: "date",
            refType: profileBirthdateRef,
            handlechange: () => {},
            disabled: false
        },
        {
            label: "Email",
            type: "text",
            disabled: true,
            value: ""
        }
    ];

    const settingsPageInputs = settingsPageInputHeaders.map((settingsInput) => ({
            labelText: `${settingsInput.label}\n`,
            labelDirection: "column",
            id: `login-${settingsInput.label}-input`,
            placeholderText: settingsInput.placeholder ? settingsInput.placeholder : `Your ${settingsInput.label}`,
            pattern: settingsInput.pattern,
            editable: false,
            mainOnChange: settingsInput.handlechange,
            type: settingsInput.type,
            disabled: settingsInput.disabled,
            value: settingsInput.value ? settingsInput.value : null,
            ref: settingsInput.refType,
            dataAttributes: {
                "data-input": `${settingsInput.label}`
            }
    }))

    //for submit of non-google login credentials
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const email = loginUsernameRef.current.value;
        const password = loginPasswordRef.current.value;
    
        try {
            await toast.promise(
                (async () => {
                    const loggedInCredential = await logIn(email, password);
                    const loggedInUser = loggedInCredential.user;
    
                    if (!loggedInUser.emailVerified) {
                        throw new Error("Please verify your email before logging in.");
                    }
    
                    return loggedInCredential;
                })(),
                {
                    loading: 'Logging in...',
                    success: 'User Login successful',
                    error: (err) => err.message || 'Login failed'
                }
            );
    
            await new Promise((resolve) => setTimeout(resolve, 500));
            navigate("../dashboard");

            loginUsernameRef.current.value = "";
            loginPasswordRef.current.value = "";
    
        } catch (error) {
            toast.error(error.message);//custom message for every error.code just like in Sign Up
        }
    }    

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          navigate("../dashboard");
        } catch (error) {
          alert(error.message);
        }
    };

    return(
        <styled.SettingsPageWrapper>
            <styled.SettingsButtonSpace>
                <styled.SettingsPanelButton />
                <styled.SettingsPanelButton />
            </styled.SettingsButtonSpace>
            <styled.UserInfoSpace>
                <styled.UserInfoForm
                    fieldHeight={"75vh"}
                    id={"user-info-form"}
                    formInputs={settingsPageInputs}
                    labelClassName={"login-inputs-label"}
                    hasSubmit
                    submitText={"Save"}
                    handleSubmit={handleLoginSubmit}
                    hasCancel
                    cancelText={"Cancel"}
                    hasEdit
                    editText={"Edit"}
                />
            </styled.UserInfoSpace>
        </styled.SettingsPageWrapper>
    )
}

export default SettingsPage;