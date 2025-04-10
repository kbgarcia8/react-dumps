import React from "react";

const NoProfilePicIcon = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="48"
        height="48" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        strokeLinejoin="round" 
        className="lucide lucide-circle-user-round-icon lucide-circle-user-round"
        {...props}
    >
        <path d="M18 20a6 6 0 0 0-12 0"/>
        <circle cx="12" cy="10" r="4"/>
        <circle cx="12" cy="12" r="10"/>
    </svg>
)

export default NoProfilePicIcon;