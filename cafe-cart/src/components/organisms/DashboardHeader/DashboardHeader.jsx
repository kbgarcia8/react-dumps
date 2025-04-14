import { React } from "react";
import { useAuth } from "../../../context/UserAuthContext";
import * as styled from "./DashboardHeader.styles";

const DashboardHeader =({}) => {
    
    const {userProfile} = useAuth();

    return(
        <styled.DashboardHeaderWrapper>
            <styled.DashboardWelcomeMessage>Welcome back {userProfile?.username || userProfile.email.split("@")[0]}. What should we get you to sip and eat today?</styled.DashboardWelcomeMessage>
        </styled.DashboardHeaderWrapper>
    )
}

export default DashboardHeader;