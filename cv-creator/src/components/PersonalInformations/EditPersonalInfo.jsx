import { Inputs } from "../Inputs.jsx";
import React from 'react';
export function EditPersonalInfo({ props, handlePersonalInfoChange }) {
  const {
    firstName,
    lastName,
    jobTitle,
    inputEmail,
    contactNumber,
    inputAddress,
    inputWebsite,
  } = props;
  return (
    <>
      <form className="personal-info-form">
        <fieldset >
          <legend></legend>
          <Inputs
            id="first-name"
            labelText="First Name"
            placeholderText="John Mark"
            type="text"
            dataKey="firstName"
            value={firstName}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="last-name"
            labelText="Last Name"
            placeholderText="Stanton"
            type="text"
            dataKey="lastName"
            value={lastName}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="job-title"
            labelText="Job/Professional Title"
            placeholderText="Engineer"
            type="text"
            dataKey="jobTitle"
            value={jobTitle}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="email"
            labelText="Email"
            placeholderText="my-user@example.com"
            type="email"
            dataKey="inputEmail"
            value={inputEmail}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="contact-number"
            labelText="Contact Number"
            placeholderText="(+63)000-000-0000"
            type="tel"
            dataKey="contactNumber"
            value={contactNumber}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="address"
            labelText="Address"
            placeholderText="123 B This Land, State, Country"
            type="text"
            dataKey="inputAddress"
            value={inputAddress}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            id="website"
            labelText="Website"
            placeholderText="https://my-url.com"
            type="url"
            isRequired={false}
            dataKey="inputWebsite"
            value={inputWebsite}
            onChange={handlePersonalInfoChange}
          />
          <Inputs
            inputType="textarea"
            id="summary"
            labelText="Summary (Optional)"
            placeholderText="Tell Me About Yourself/Profession"
            type="text"
            dataKey="inputDescription"
            onChange={handlePersonalInfoChange}
          />
        </fieldset>
      </form>
    </>
  );
}
