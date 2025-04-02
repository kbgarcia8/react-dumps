import {React, useState, useEffect, useMemo} from "react";
import PropTypes from "prop-types";
import * as styled from './LoginPage.styles'

const LoginPage =({}) => {

    const loginPageInputs = [];

    {/*const addressFieldInputs = useMemo(()=> {
        return addressBank.map((addressEntry, index) => ({
            labelText: `${addressEntry.name}\n`,
            additionalInfo: `${addressEntry.number}\n${addressEntry.location}`,
            labelDirection: "column",
            id: `address-entry-${index}`,
            placeholderText: "",
            editable: true,
            mainOnChange: checkedAddress,
            onClickEdit: openEditAddressEntryPanel,
            editIcon: <EditIcon/>,
            onClickDelete: deleteAddressEntry,
            deleteIcon: <DeleteIcon/>,
            onClickSave: saveAddressEntryEdit,
            onClickCancel: cancelAddressEntryEdit,
            type: "radio",
            isRequired: true,
            data: addressEntry,
            dataAttributes: {
                "data-index": index
            }
        }))
    }, [])*/}

    return(
        <styled.LoginPageWrapper>
            <styled.LoginPageHeader>
                Welcome to Kain at Kape Website! Please Login to continue.
            </styled.LoginPageHeader>
            <styled.LoginForm
                legendText={"Welcome"}
                fieldHeight={"50vh"}
                id={"main-login-form"}
                formInputs={loginPageInputs}
                hasSubmit={true}
            />
        </styled.LoginPageWrapper>
    )
}

export default LoginPage;