import { Inputs } from "../Inputs.jsx";

export function EditPersonalInfo ({props}) {
    let {firstName, lastName, jobTitle, inputEmail, contactNumber, inputAddress, inputWebsite, handleChange} = props
    console.log(props.firstName)
    return (
        <>
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                <Inputs 
                    id="first-name"
                    labelText="First Name"
                    placeholderText="John Mark"
                    type="text"                    
                    dataKey="firstName"
                    value={firstName}
                    onChange={handleChange}
                />
                <Inputs 
                    id="last-name"
                    labelText="Last Name"
                    placeholderText="Stanton"
                    type="text"
                    dataKey="lastName"
                    value={lastName}
                    onChange={handleChange}                
                />
                <Inputs 
                    id="job-title"
                    labelText="Job/Professional Title"
                    placeholderText="Engineer"
                    type="text"
                    dataKey="jobTitle"
                    value={jobTitle}
                    onChange={handleChange} 
                />
                <Inputs 
                    id="email"
                    labelText="Email"
                    placeholderText="my-user@example.com"
                    type="email"
                    dataKey="inputEmail"
                    value={inputEmail}
                    onChange={handleChange}  
                />
                <Inputs 
                    id="contact-number"
                    labelText="Contact Number"
                    placeholderText="(+63)000-000-0000"
                    type="tel"
                    dataKey="contactNumber"
                    value={contactNumber}
                    onChange={handleChange} 
                />
                <Inputs 
                    id="address"
                    labelText="Address"
                    placeholderText="123 B This Land, State, Country"
                    type="text"
                    dataKey="inputAddress"
                    value={inputAddress}
                    onChange={handleChange} 
                />
                <Inputs 
                    id="website"
                    labelText="Website"
                    placeholderText="https://my-url.com"
                    type="url"
                    isRequired={false}
                    dataKey="sampleWebsite"
                    value={firstName}
                    onChange={handleChange} 
                />
                <Inputs 
                    inputType="textarea"
                    id="summary"
                    labelText="Summary (Optional)"
                    placeholderText="Tell Me About Yourself/Profession"
                    type="text"
                    dataKey="inputWebsite"
                    value={inputWebsite}
                    onChange={handleChange} 
                />
            </fieldset>
        </form>
        </>
    )
}