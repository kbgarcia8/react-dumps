import { React, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as styled from "./ContactPage.styles"
import emailjs from '@emailjs/browser';
import { APIProvider, Map, Marker} from "@vis.gl/react-google-maps";
import { formatDate } from "../../../../utils/utils";
import { toast } from "react-toastify";
import TelephoneIcon from "../../../atoms/SVG/TelephoneIcon";
import MobilePhoneIcon from "../../../atoms/SVG/MobilePhoneIcon";
import EmailIcon from "../../../atoms/SVG/EmailIcon";
import LocationIcon from "../../../atoms/SVG/LocationIcon";

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
            message: "",
            dateAndTimeSent: ""
        });
        const [markerLocation, setMarkerLocation] = useState({
            lat: 14.04040774415383,
            lng: 121.16413723858392,
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
            setName(contactNameRef.current);
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
                setSubject(contactSubjectRef.current);
            }, 1000);
            
            return () => clearTimeout(timeout);
        }, [inputValues.subject]);
    
        useEffect(() => {
            const timeout = setTimeout(() => {
                setMessage(contactMessageRef.current);
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
            isRequired: false,
            ref: contactInput.refType,
            rows: contactInput.type === "textarea" ? 10 : undefined,
            cols: contactInput.type === "textarea" ? 30 : undefined,
            dataAttributes: {
                "data-input": `${contactInput.label}`
            }
    }))

    const handleEmailSend = async (e) => {
        e.preventDefault();
        const templateParams = {
            name: inputValues.name,
            email: inputValues.email,
            subject: inputValues.subject,
            message: inputValues.message,
            dateAndTimeSent: formatDate(new Date())
        };
        try {
            {/*await toast.promise(
                emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams, import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
                {
                    loading: 'Sending Email...',
                    success: 'Email Sent Successfully',
                    error: (err) => err.message || 'Sending email failed'
                }
            )
            await new Promise((resolve) => setTimeout(resolve, 500));*/}
            const currentFieldset = e.target.closest("fieldset")
            const inputs = currentFieldset.querySelectorAll("div input");
            console.log(inputs)
            contactNameRef.current = "";
            contactEmailRef.current = "";
            contactSubjectRef.current = "";
            contactMessageRef.current = "";
        } catch (error) {
            toast.error(error.message);
        }
    }

    return(
        <styled.ContactPageWrapper>
            <styled.ContactPageHeader>
                {"Reservations, feedback or questions? We would love to hear from you — send us an email and let us know how we can help!"}
            </styled.ContactPageHeader>
            <styled.ContactUsEmailFormSpace>
                <styled.ContactUsEmailForm
                    fieldHeight={"60vh"}
                    id={"contact-page-email-form"}
                    formInputs={contactPageInputs}
                    labelClassName={"contact-page-inputs-label"}
                    inputClassName={"contact-page-inputs"}
                    hasSubmit
                    submitText={"Send"}
                    handleSubmit={handleEmailSend}
                />
            </styled.ContactUsEmailFormSpace>
            <styled.CafeInformationSapce>
                <styled.ContactDetailsSpace>
                    <styled.ContactDetailsSpan>
                        <TelephoneIcon strokeWidth={3}/>
                        {"+(638)-123-4578"}
                    </styled.ContactDetailsSpan>
                    <styled.ContactDetailsSpan>
                        <MobilePhoneIcon strokeWidth={3}/>
                        {"+63(916)-2684-0441/+63(998)-7054-3972"}
                    </styled.ContactDetailsSpan>
                    <styled.ContactDetailsSpan>
                        <EmailIcon strokeWidth={3}/>
                        {"tarakainatkape@gmail.com"}
                    </styled.ContactDetailsSpan>
                    <styled.ContactDetailsSpan>
                        <LocationIcon strokeWidth={3}/>
                        {"Unit 3B, Sunshine Apartments 1234 Mabini Street, Barangay Poblacion\nMakati City, Metro Manila 1226, Philippines"}
                    </styled.ContactDetailsSpan>
                </styled.ContactDetailsSpace>
                <styled.GoogleMapPinSpace>
                    <styled.GoogleMapPinSpaceHeader>{`Pin \"Sunshine Apartments\" and see you there`}</styled.GoogleMapPinSpaceHeader>
                    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
                            <Map
                                defaultZoom={13}
                                defaultCenter={markerLocation}
                                gestureHandling={"greedy"}
                                disableDefaultUI
                            >
                                <Marker position={markerLocation} />
                            </Map>
                    </APIProvider>                    
                </styled.GoogleMapPinSpace>
            </styled.CafeInformationSapce>
        </styled.ContactPageWrapper>
    )
}

export default ContactPage;