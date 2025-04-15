import {React, useState, useEffect, useMemo, useRef, useCallback} from "react";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { debounce } from 'lodash'
import { useAuth } from "../../../../context/UserAuthContext";
import { useTheme } from "../../../../context/ThemeContext";
import * as styled from './SettingsPage.styles'
import NoProfilePicIcon from "../../../atoms/SVG/NoProfilePicIcon";
import { lightTheme } from "../../../../styles/theme";

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

const UserInformationTab = (userProfile, theme, settingsPageInputs, isProfileIncompleteOrNull, isEditing, handleUserInfoSave, editUserInfo) => (
    <>
        <styled.UserInfoDisplaySpace>
            <styled.UserInfoSpace>
                <styled.ProfilePictureContainer>                    
                {userProfile?.photoURL ? <styled.ProfilePicture src={userProfile?.photoURL}/> : <NoProfilePicIcon/>}
                </styled.ProfilePictureContainer>
                <styled.UserFullnameSpan>{`${userProfile?.fullname ? userProfile.fullname: "-"}`}</styled.UserFullnameSpan>
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
                hasEdit={isEditing ? false : true}
                editText={"Edit"}
                handleEdit={editUserInfo}
            />
        </styled.UserInfoEditSpace>
    </>
)

const SettingsPage =({}) => {
    const { currentUser , saveUserProfile, userProfile, isProfileIncompleteOrNull } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const {themeSwitchChecked, handleThemeSwitch} = useOutletContext();
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
    const [openedTab, setOpenedTab] = useState(0);
    
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
            const labelTextToKey = settingsInput.label.toLowerCase().replace(/\s+/g, '')
            return {
                labelText: `${settingsInput.label}\n`,
                labelDirection: "column",
                id: `login-${settingsInput.label}-input`,
                placeholderText: settingsInput.placeholder ? settingsInput.placeholder : `Your ${settingsInput.label}`,
                pattern: settingsInput.pattern,
                mainOnChange: handleSettingsInputChange,
                type: settingsInput.type,
                disabled: settingsInput.disabled,
                isRequired: true,
                value: inputValues[labelTextToKey] || "",
                dataAttributes: {
                    "data-input": labelTextToKey,
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
            if(inputValues.fullname !== "" && inputValues.mainaddress !== "" && inputValues.maincontactnumber !=="") {
                if (userProfile.userAddressBank.find((addressEntry) => addressEntry.name == inputValues.fullname && addressEntry.number == inputValues.maincontactnumber && addressEntry.location == inputValues.mainaddress) === undefined) {
                    const updatedAddressBank = [
                        {
                            name: inputValues.fullname,
                            number: inputValues.maincontactnumber,
                            location: inputValues.mainaddress,
                            editing: false,
                            checked: true
                        },
                        ...userProfile.userAddressBank
                    ]
                }
                await toast.promise(
                    (async () => {
                        const saveUserInfo = await saveUserProfile({ "userAddressBank": updatedAddressBank});
        
                        return saveUserInfo;
                    })(),
                    {
                        loading: 'Saving updated user info...',
                        success: 'User information saved successfully',
                        error: (err) => err.message || 'Saving Failed'
                    }
                );
            }
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
    //tab switcher
    const switchTab = (e) => {
        const {index} = e.currentTarget.dataset;
        setOpenedTab((prevTab) =>
            prevTab != index
            ? index
            : prevTab
        );
    }
    //useEffect for console.log checking
    useEffect(()=>{
        {/*console.dir(inputValues, { depth: null, colors: true })
        console.dir(settingsPageInputs, { depth: null, colors: true })
        console.dir(userProfile, { depth: null, colors: true })*/}
    },[inputValues, settingsPageInputs])

    useEffect(() => {
        if (userProfile) {
            const updatedValues = {
                username: userProfile.username || "",
                fullname: userProfile.fullname || "",
                mainaddress: userProfile.mainaddress || "",
                maincontactnumber: userProfile.maincontactnumber || "",
                birthdate: userProfile.birthdate || "",
                lastEdit: new Date()
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

    }, [userProfile]);

    useEffect(() => {
        if(userProfile.lastEdit !== "") {
            setIsEditing(false);
            setSettingsPageInputBase((prevSettingsPageInputBase) =>
                prevSettingsPageInputBase.map((inputbase)=>(
                    inputbase['label'] !== "Email"
                        ? {...inputbase,disabled: true}
                        : inputbase
                ))
            )
        }        
    }, [])

    return(
        <styled.SettingsPageWrapper>
            <styled.SettingsButtonSpace>
                <styled.SettingsPanelButton onClick={switchTab} text={"User Information"} dataAttributes={{"data-index": 0}}/>
                <styled.SettingsPanelButton onClick={switchTab} text={"User Settings"} dataAttributes={{"data-index": 1}}/>
            </styled.SettingsButtonSpace>
            { openedTab == 0 
                ? UserInformationTab(userProfile, theme, settingsPageInputs, isProfileIncompleteOrNull, isEditing, handleUserInfoSave, editUserInfo)
                : 
                <styled.UserSettingsDisplaySpace>
                    <styled.ThemeSwitcherContainer>
                        <styled.ThemeSwitchHeader>{"Theme Switch: "}</styled.ThemeSwitchHeader>
                        <styled.ThemeSwitchLabel textLabel={theme === lightTheme ? "Light Mode": "Dark Mode"} htmlFor={"theme-switch"}>
                            <styled.ThemeSwitchInput checked={themeSwitchChecked} onChange={handleThemeSwitch} type={"checkbox"} id={"theme-switch"}/>
                            <styled.ThemeSwitch></styled.ThemeSwitch>
                        </styled.ThemeSwitchLabel>
                    </styled.ThemeSwitcherContainer>
                </styled.UserSettingsDisplaySpace>
            }
        </styled.SettingsPageWrapper>
    )
}

export default SettingsPage;