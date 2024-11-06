import "../../styles/PersonalInformations/DisplayPersonalInfo.css"

export function DisplayPersonalInfo (props) {
    const {firstName, lastName, jobTitle, inputEmail, contactNumber, inputAddress, inputWebsite} = props
    return (
        <>
        {(firstName!=''||lastName!='') && <p className="personal-detail-entry">{firstName} {lastName}</p>}
        {jobTitle!='' && <p className="personal-detail-entry">{jobTitle}</p>}
        {inputEmail!='' && <p className="personal-detail-entry">
            <img src="/src/assets/email.svg" alt="email-icon" />
            <span>{inputEmail}</span>
        </p>}
        {contactNumber!='' && <p className="personal-detail-entry">
            <img src="/src/assets/phone.svg" alt="phone-icon" />
            <span>{contactNumber}</span>
        </p>}
        {inputAddress!='' && <p className="personal-detail-entry">
            <img src="/src/assets/pin_loc.svg" alt="pin-location-icon" />
            <span>{inputAddress}</span>
        </p>}
        {inputWebsite!='' && <p className="personal-detail-entry">
            <img src="/src/assets/web-page.svg" alt="webpage-icon" />
            <span>{inputWebsite}</span>
        </p>}
        </>
    )
}