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
    color: "white",
  };
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
      <div className="contact-details-space" style={filterStyle}>
        {inputEmail && (
          <p className="personal-detail-entry">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36 15H44V28V41H4V28V15H12"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24 19V5"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 13L24 19L18 13"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 15L24 30L44 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{inputEmail}</span>
          </p>
        )}
        {contactNumber && (
          <p className="personal-detail-entry">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M22 37H26"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span>{contactNumber}</span>
          </p>
        )}
        {inputAddress && (
          <p className="personal-detail-entry">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
            </svg>
            <span>{inputAddress}</span>
          </p>
        )}
        {inputWebsite && (
          <p className="personal-detail-entry">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="8"
                width="40"
                height="32"
                rx="3"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <circle
                r="2"
                transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 10 14)"
                fill="currentColor"
              />
              <circle
                r="2"
                transform="matrix(-1.31134e-07 -1 -1 1.31134e-07 16 14)"
                fill="currentColor"
              />
            </svg>
            <span>{inputWebsite}</span>
          </p>
        )}
      </div>
    </>
  );
}
