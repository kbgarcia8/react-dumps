import {React, useState, useEffect, useMemo} from "react";
import { useDeepCompareEffect } from 'use-deep-compare';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context/UserAuthContext";
import * as styled from './SettingsPage.styles'

const settingsPageInputHeaders = [
    {
        label: "Username",
        type: "text",
        disabled: false
    }, 
    {
        label: "Full Name",
        type: "text",
        disabled: false
    },
    {
        label: "Main Address",
        type: "text",
        disabled: false
    },
    {
        label: "Main Contact Number",
        type: "text",
        placeholder: "09XX-XXX-XXXX",
        disabled: false,
        pattern: "[0-9]{4}-[0-9]{3}-[0-9]{4}"
    },
    {
        label: "Birthdate",
        type: "date",
        disabled: false
    },
    {
        label: "Email",
        type: "text",
        disabled: true,
        value: ""
    }
];

const SettingsPage =({}) => {
    const { saveUserProfile, userProfile } = useAuth();
    let navigate = useNavigate();
    //console.log(userProfile);
    const [settingsPageInputBase, setSettingsPageInputBase] = useState(settingsPageInputHeaders)
    const [inputValues, setInputValues] = useState({
            username: "",
            fullname: "",
            mainaddress: "",
            maincontactnumber: "",
            birthdate: ""
    });

    const handleSettingsInputChange = (e) => {
        const {index, input} = e.currentTarget.dataset;
        const currentValue = e.currentTarget.value;
        setSettingsPageInputBase((prevSettingsPageInputBase) =>
            prevSettingsPageInputBase.map((inputbase,idx)=>
                idx === parseInt(index) ? {...inputbase, value: currentValue} : inputbase
            )
        )

        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [input]: currentValue
        }))
    }

    const settingsPageInputs = useMemo(()=> {
        return settingsPageInputBase.map((settingsInput,index) => ({
            labelText: `${settingsInput.label}\n`,
            labelDirection: "column",
            id: `login-${settingsInput.label}-input`,
            placeholderText: settingsInput.placeholder ? settingsInput.placeholder : `Your ${settingsInput.label}`,
            pattern: settingsInput.pattern,
            editable: false,
            mainOnChange: handleSettingsInputChange,
            type: settingsInput.type,
            disabled: settingsInput.disabled,
            value: settingsInput.value ? settingsInput.value : "",
            dataAttributes: {
                "data-input": `${settingsInput.label.toLowerCase().replace(/\s+/g, '')}`,
                "data-index": index
            }
        }))
    },[settingsPageInputBase])

    //const [settingsInputSet,setSettingsInputSet] = useState(settingsPageInputs)
    const [isEditing, setIsEditing] = useState(false);
    
    //for submit of user info
    const handleUserInfoSave = async (e) => {
        e.preventDefault();

    
        /*try {
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
        }*/
    }

    return(
        <styled.SettingsPageWrapper>
            <styled.SettingsButtonSpace>
                <styled.SettingsPanelButton text={"User Information"}/>
                <styled.SettingsPanelButton text={"User Settings"}/>
            </styled.SettingsButtonSpace>
            <styled.UserInfoSpace>
                <styled.UserInfoForm
                    fieldHeight={"70vh"}
                    id={"user-info-form"}
                    formInputs={settingsPageInputs}
                    labelClassName={"user-inputs-label"}
                    inputClassName={"user-info-input"}
                    hasSubmit={userProfile === null ? true : isEditing ? true : false}
                    submitText={"Save"}
                    handleSubmit={handleUserInfoSave}
                    hasCancel={userProfile === null ? false : isEditing ? true : false}
                    cancelText={"Cancel"}
                    hasEdit={userProfile === null ? false : true}
                    editText={"Edit"}
                />
            </styled.UserInfoSpace>
        </styled.SettingsPageWrapper>
    )
}

export default SettingsPage;