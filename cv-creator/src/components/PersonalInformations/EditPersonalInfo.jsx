import { Inputs } from "../Inputs.jsx";

export function EditPersonalInfo ({
    onChangeFirst,
    firstName,
    onChangeLast,
    lastName,
    onChangeEmail,
    email
}) {      
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
                    value={firstName}
                    onChange={onChangeFirst}
                    dataKey="firstName"
                />
                <Inputs 
                    id="last-name"
                    labelText="Last Name"
                    placeholderText="Stanton"
                    type="text"
                    dataKey="lastName"
                    value={lastName}
                    onChange={onChangeLast}                
                />
                <Inputs 
                    id="job-title"
                    labelText="Job/Professional Title"
                    placeholderText="Engineer"
                    type="text"
                    dataKey="jobTitle"
                />
                <Inputs 
                    id="email"
                    labelText="Email"
                    placeholderText="my-user@example.com"
                    type="email"
                    dataKey="sampleEmail"
                    value={email}
                    onChange={onChangeEmail} 
                />
                <Inputs 
                    id="contact-number"
                    labelText="Contact Number"
                    placeholderText="(+63)000-000-0000"
                    type="tel"
                    dataKey="sampleContactNum"
                />
                <Inputs 
                    id="address"
                    labelText="Address"
                    placeholderText="123 B This Land, State, Country"
                    type="text"
                    dataKey="sampleAddress"
                />
                <Inputs 
                    id="website"
                    labelText="Website"
                    placeholderText="https://my-url.com"
                    type="url"
                    isRequired={false}
                    dataKey="sampleWebsite"
                />
                <Inputs 
                    inputType="textarea"
                    id="summary"
                    labelText="Summary (Optional)"
                    placeholderText="Tell Me About Yourself/Profession"
                    type="text"
                    dataKey="sampleSummary"
                />
            </fieldset>
        </form>
        </>
    )
}