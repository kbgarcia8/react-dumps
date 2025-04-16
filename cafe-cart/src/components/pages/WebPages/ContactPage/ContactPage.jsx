import { React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as styled from "./ContactPage.styles"

const ContactPage =({}) => {

    const loginEmailRef = useRef(null);
        const contactNameRef = useRef(null);
        const contactEmailRef = useRef(null);
        const contactSubjectRef = useRef(null);
        const contactMessageRef = useRef(null);
    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [subject, setSubject] = useState("");
        const [message, setMessage] = useState("");
    
        const [inputValues, setInputValues] = useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    
        const handleNameContactChange = (e) => {
            const { input } = e.currentTarget.dataset;
            contactNameRef.current = e.target.value;
            setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: contactNameRef.current}))
        };
        const handleEmailLoginChange = (e) => {
            const { input } = e.currentTarget.dataset;
            contactEmailRef.current = e.target.value;
            setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: contactEmailRef.current}))
        };
        const handleSubjectContactChange = (e) => {
            const { input } = e.currentTarget.dataset;
            contactSubjectRef.current = e.target.value;
            setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: contactSubjectRef.current}))
        };
        const handleMessageContactChange = (e) => {
            const { input } = e.currentTarget.dataset;
            contactMessageRef.current = e.target.value;
            setInputValues((prevInputValues) => ({...prevInputValues, [`${input.toLowerCase()}`]: contactMessageRef.current}))
        };
        
        useEffect(() => {
        const timeout = setTimeout(() => {
            setEmail(contactNameRef.current);
        }, 1000);
        
        return () => clearTimeout(timeout);
        }, [inputValues.name]);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setEmail(contactEmailRef.current);
            }, 1000);
            
            return () => clearTimeout(timeout);
        }, [inputValues.email]);
    
        useEffect(() => {
            const timeout = setTimeout(() => {
                setPassword(contactSubjectRef.current);
            }, 1000);
            
            return () => clearTimeout(timeout);
        }, [inputValues.subject]);
    
        useEffect(() => {
            const timeout = setTimeout(() => {
                setPassword(contactMessageRef.current);
            }, 1000);
            
            return () => clearTimeout(timeout);
        }, [inputValues.message]);

    const contactPageInputHeaders = [
        {
            label: "Name",
            type: "text",
            refType: contactNameRef,
            handlechange: handleNameContactChange
        },
        {
            label: "Email",
            type: "email",
            refType: contactEmailRef,
            handlechange: handleEmailLoginChange
        }, 
        {
            label: "Subject",
            type: "text",
            refType: contactSubjectRef,
            handlechange: handleSubjectContactChange
        },
        {
            label: "Message",
            type: "textarea",
            refType: contactMessageRef,
            handlechange: handleMessageContactChange
        }
    ];

    const contactPageInputs = contactPageInputHeaders.map((contactInput) => ({
            labelText: `${contactInput.label}\n`,
            labelDirection: "column",
            id: `login-${contactInput.label}-input`,
            placeholderText: `Your ${contactInput.label}`,
            editable: false,
            mainOnChange: contactInput.handlechange, 
            type: contactInput.type,
            isRequired: true,
            ref: contactInput.refType,
            dataAttributes: {
                "data-input": `${contactInput.label}`
            }
    }))

    const handleEmailSend = async (e) => {
        e.preventDefault();
        const currentEmail = inputValues.email;
        const currentPassword = inputValues.password;

        try {
            const {userCredential, profileIncomplete} = await toast.promise(
                    logIn(currentEmail, currentPassword),                
                {
                    loading: 'Logging in...',
                    success: 'User Login successful',
                    error: (err) => err.message || 'Login failed'
                }
            )
            await new Promise((resolve) => setTimeout(resolve, 500));
            if(profileIncomplete) {
                navigate("../dashboard/settings");
            } else if (!profileIncomplete) {
                navigate("../dashboard")
            }

            loginEmailRef.current = "";
            loginPasswordRef.current = "";
    
        } catch (error) {
            toast.error(error.message);//custom message for every error.code just like in Sign Up
        }
    }

    return(
        <styled.ContactPageWrapper>
            <styled.ContactPageHeader>
                {"Reservations, feedback or questions? We would love to hear from you — send us an email and let us know how we can help!"}
            </styled.ContactPageHeader>
            <styled.ContactEmailFormSpace>
                <styled.ContactEmailForm
                    fieldHeight={"60vh"}
                    id={"email-contact-form"}
                    formInputs={contactPageInputs}
                    labelClassName={"contact-inputs-label"}
                    hasSubmit
                    submitText={"Send"}
                    handleSubmit={handleEmailSend}
                />
            </styled.ContactEmailFormSpace>
        </styled.ContactPageWrapper>
    )
}

export default ContactPage;