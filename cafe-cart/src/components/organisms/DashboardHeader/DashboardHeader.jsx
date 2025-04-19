import { React } from "react";
import { useAuth } from "../../../context/UserAuthContext.jsx";
import * as styled from "./DashboardHeader.styles.js";

const DashboardHeader =({}) => {
    
    const {userProfile} = useAuth();

    return(
        <styled.DashboardHeaderWrapper>
            <styled.DashboardWelcomeMessage>Welcome back {userProfile?.username || userProfile.email.split("@")[0]}. What should we get you to sip and eat today?</styled.DashboardWelcomeMessage>
        </styled.DashboardHeaderWrapper>
    )
}

export default DashboardHeader;