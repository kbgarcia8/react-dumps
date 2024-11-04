import { Inputs } from "../Inputs.jsx";
import { useState } from "react";

export function EditPersonalInfo ({onChange, firstName}) {      
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
                    onChange={onChange}
                />
                <Inputs 
                    id="last-name"
                    labelText="Last Name"
                    placeholderText="Stanton"
                    type="text"
                />
                <Inputs 
                    id="job-title"
                    labelText="Job/Professional Title"
                    placeholderText="Engineer"
                    type="text"
                />
                <Inputs 
                    id="email"
                    labelText="Email"
                    placeholderText="my-user@example.com"
                    type="email"
                />
                <Inputs 
                    id="contact-number"
                    labelText="Contact Number"
                    placeholderText="(+63)000-000-0000"
                    type="tel"
                />
                <Inputs 
                    id="address"
                    labelText="Address"
                    placeholderText="123 B This Land, State, Country"
                    type="text"
                />
                <Inputs 
                    id="website"
                    labelText="Website"
                    placeholderText="https://my-url.com"
                    type="url"
                    isRequired={false}
                />
                <Inputs 
                    inputType="textarea"
                    id="summary"
                    labelText="Summary (Optional)"
                    placeholderText="Tell Me About Yourself/Profession"
                    type="text"
                />
            </fieldset>
        </form>
        </>
    )
}