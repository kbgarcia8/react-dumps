import "../../styles/PersonalInformations/DisplayPersonalInfo.css";

export function DisplayPersonalInfo({ props }) {
  const {
    firstName,
    lastName,
    jobTitle,
    inputEmail,
    contactNumber,
    inputAddress,
    inputWebsite,
  } = props;
  const filterStyle = {
    filter: "invert(0%) sepia(66%) saturate(1542%) hue-rotate(114deg) brightness(99%) contrast(106%)"
  }
  return (
    <>
      {(firstName || lastName) && (
        <p className="personal-detail-entry" id="full-name-display">
          {firstName} {lastName}
        </p>
      )}
      {jobTitle && (
        <p className="personal-detail-entry" id="job-title-display">
          {jobTitle}
        </p>
      )}
      <div className="contact-details-space">
      {inputEmail && (
        <p className="personal-detail-entry">
          <img src="src/assets/email.svg" alt="email-icon" style={filterStyle}/>
          <span>{inputEmail}</span>
        </p>
      )}
      {contactNumber && (
        <p className="personal-detail-entry">
          <img src="src/assets/phone.svg" alt="phone-icon" style={filterStyle}/>
          <span>{contactNumber}</span>
        </p>
      )}
      {inputAddress && (
        <p className="personal-detail-entry">
          <img src="src/assets/pin_loc.svg" alt="pin-location-icon" style={filterStyle}/>
          <span>{inputAddress}</span>
        </p>
      )}
      {inputWebsite && (
        <p className="personal-detail-entry">
          <img src="src/assets/web-page.svg" alt="webpage-icon" style={filterStyle}/>
          <span>{inputWebsite}</span>
        </p>
      )}
      </div>
    </>
  );
}
