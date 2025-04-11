import {React, useState, useEffect, useMemo, useRef, useCallback} from "react";
import { useDeepCompareEffect } from 'use-deep-compare';
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { debounce } from 'lodash'
import { useAuth } from "../../../../context/UserAuthContext";
import { useTheme } from "../../../../context/ThemeContext";
import * as styled from './SettingsPage.styles'
import NoProfilePicIcon from "../../../atoms/SVG/NoProfilePicIcon";

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
    }
];

const SettingsPage =({}) => {
    const { currentUser , saveUserProfile, userProfile, getUserProfile, isProfileIncompleteOrNull } = useAuth();
    const { theme } = useTheme();
    let navigate = useNavigate();
    const inputValuesRef = useRef({
        username: "",
        fullname: "",
        mainaddress: "",
        maincontactnumber: "",
        birthdate: ""
    })
    const [settingsPageInputBase, setSettingsPageInputBase] = useState(settingsPageInputHeaders)
    const [inputValues, setInputValues] = useState(inputValuesRef.current);
    const [isEditing, setIsEditing] = useState(false);
    
    const debounceSetInputValues = useCallback(
        debounce(() => {
            setInputValues({ ...inputValuesRef.current });
        }, 500),
        []
    )
    useEffect(() => {
        return () => {
            debounceSetInputValues.cancel();
        }
    }, [debounceSetInputValues]);
    const handleSettingsInputChange = (e) => {
        const {index, input} = e.currentTarget.dataset;
        const currentValue = e.currentTarget.value;

        if (inputValues[input] !== currentValue) {
            const updatedValues = { ...inputValues, [input]: currentValue };
            inputValuesRef.current = updatedValues;
            setInputValues(updatedValues);
        }

        debounceSetInputValues();
    }
    //re-map settingsPageInputs each time there is change in inputValues for values and settingsPageInputBase for disabled
    const settingsPageInputs = useMemo(()=> {
        return settingsPageInputBase.map((settingsInput,index) => {
            const labelTextTokey = settingsInput.label.toLowerCase().replace(/\s+/g, '')
            return {
                labelText: `${settingsInput.label}\n`,
                labelDirection: "column",
                id: `login-${settingsInput.label}-input`,
                placeholderText: settingsInput.placeholder ? settingsInput.placeholder : `Your ${settingsInput.label}`,
                pattern: settingsInput.pattern,
                mainOnChange: handleSettingsInputChange,
                type: settingsInput.type,
                disabled: settingsInput.disabled,
                value: inputValues[labelTextTokey] || "",
                dataAttributes: {
                    "data-input": labelTextTokey,
                    "data-index": index
                }
            }            
        })
    },[settingsPageInputBase, inputValues])
    
    //for submit of user info
    const handleUserInfoSave = async (e) => {
        e.preventDefault();

        try {
            await toast.promise(
                (async () => {
                    const saveUserInfo = await saveUserProfile(inputValues);
    
                    return saveUserInfo;
                })(),
                {
                    loading: 'Saving updated user info...',
                    success: 'User information saved successfully',
                    error: (err) => err.message || 'Saving Failed'
                }
            );
    
            await new Promise((resolve) => setTimeout(resolve, 500));
            setSettingsPageInputBase((prevSettingsPageInputBase) =>
                prevSettingsPageInputBase.map((inputbase)=>({
                    ...inputbase,
                    disabled: true
                }))
            )
            setIsEditing(false);
        } catch (error) {
            console.error(error.message);//custom message for every error.code just like in Sign Up
        }
    }
    //to open forms
    const editUserInfo = () => {
        setIsEditing((prev) => 
            prev !== false
            ? false
            : true
        )
        setSettingsPageInputBase((prevSettingsPageInputBase) =>
            prevSettingsPageInputBase.map((inputbase)=>(
                inputbase['label'] !== "Email"
                    ? {...inputbase,disabled: false}
                    : inputbase
            ))
        )
    }
    //useEffect for console.log checking
    useEffect(()=>{
        console.dir(inputValues, { depth: null, colors: true })
        console.dir(settingsPageInputs, { depth: null, colors: true })
    },[inputValues, settingsPageInputs])

    useEffect(() => {
        console.log("Fetching user data...")
        const fetchUserProfile = async () => {
            try {
                const fetchedData = await toast.promise(
                    getUserProfile(currentUser.uid),
                    {
                        loading: 'Fetching user information...',
                        success: 'User information fetched successfully',
                        error: (err) => err.message || 'User has no existing data'
                    }
                );
        
                await new Promise((resolve) => setTimeout(resolve, 500));

                if (fetchedData) {
                    const updatedValues = {
                        username: userProfile.username || "",
                        fullname: userProfile.fullname || "",
                        mainaddress: userProfile.mainaddress || "",
                        maincontactnumber: userProfile.maincontactnumber || "",
                        birthdate: userProfile.birthdate || "",
                    };
            
                    inputValuesRef.current = updatedValues;
                    setInputValues(updatedValues);
                    setSettingsPageInputBase(prev =>
                        prev.map(input => ({
                            ...input,
                            value: updatedValues[input.label.toLowerCase().replace(/\s+/g, '')]
                        }))
                    );
                }
        
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchUserProfile();
    }, [currentUser, userProfile])

    return(
        <styled.SettingsPageWrapper>
            <styled.SettingsButtonSpace>
                <styled.SettingsPanelButton text={"User Information"}/>
                <styled.SettingsPanelButton text={"User Settings"}/>
            </styled.SettingsButtonSpace>
            <styled.UserInfoDisplaySpace>
                <styled.UserInfoSpace>
                    <styled.ProfilePictureContainer>                    
                    {userProfile?.photoURL ? <styled.ProfilePicture src={userProfile?.photoURL}/> : <NoProfilePicIcon/>}
                    </styled.ProfilePictureContainer>
                    <styled.UserFullnameSpan>{userProfile?.name ? userProfile.name : "-"}</styled.UserFullnameSpan>
                    <styled.DetailSpan><styled.DetailSpanMarker>{"Contact Number: "}</styled.DetailSpanMarker>{`${userProfile?.maincontactnumber ? userProfile.maincontactnumber : "- - -"}`}</styled.DetailSpan>
                    <styled.DetailSpan><styled.DetailSpanMarker>{"Main Address: "}</styled.DetailSpanMarker>{`${userProfile?.mainaddress ? userProfile.mainaddress : "- - -"}`}</styled.DetailSpan>
                </styled.UserInfoSpace>
                <styled.RewardsCardSpace>
                    <styled.RewardCardHeader>{"Reward Points Card"}</styled.RewardCardHeader>
                    <styled.CardDivider lineColor={theme.backgroundColor3}/>
                    <styled.RewardCardDetailSpace>
                        <styled.RewardCardDetails>{"Feature Coming Soon!"}</styled.RewardCardDetails>
                    </styled.RewardCardDetailSpace>
                </styled.RewardsCardSpace>
            </styled.UserInfoDisplaySpace>
            <styled.UserInfoEditSpace>
                <styled.UserInfoForm
                    fieldHeight={"70vh"}
                    id={"user-info-form"}
                    formInputs={settingsPageInputs}
                    labelClassName={"user-inputs-label"}
                    inputClassName={"user-info-input"}
                    hasSubmit={userProfile === null  || isProfileIncompleteOrNull(userProfile) ? true : isEditing ? true : false}
                    submitText={"Save"}
                    handleSubmit={handleUserInfoSave}
                    hasCancel={userProfile === null  || isProfileIncompleteOrNull(userProfile) ? false : isEditing ? true : false}
                    cancelText={"Cancel"}
                    hasEdit={userProfile === null ? false : true}
                    editText={"Edit"}
                    handleEdit={editUserInfo}
                />
            </styled.UserInfoEditSpace>
        </styled.SettingsPageWrapper>
    )
}

export default SettingsPage;