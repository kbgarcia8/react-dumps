import "../../styles/PersonalInformations/DisplayPersonalInfo.css"

export function DisplayPersonalInfo (props) {
    const {firstName, lastName, jobTitle, inputEmail} = props
    return (
        <>
        <p className="personal-detail-entry">{firstName} {lastName}</p>
        <p className="personal-detail-entry">{jobTitle}</p>
        {inputEmail && <p className="personal-detail-entry">
            <img src="/src/assets/email.svg" alt="email-icon" />
            <span>{inputEmail}</span>
        </p>}
        <p className="personal-detail-entry">
            <img src="/src/assets/phone.svg" alt="phone-icon" />
            <span>(+63)000-000-0000</span>
        </p>
        <p className="personal-detail-entry">
            <img src="/src/assets/pin_loc.svg" alt="pin-location-icon" />
            <span>123 ABC Sample Street, Country 0000</span>
        </p>
        <p className="personal-detail-entry">
            <img src="/src/assets/web-page.svg" alt="webpage-icon" />
            <span>www.my-url.com</span>
        </p>
        </>
    )
}