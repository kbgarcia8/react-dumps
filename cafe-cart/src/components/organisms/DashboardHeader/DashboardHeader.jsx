import { Children, React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import * as styled from "./DashboardHeader.styles";

const DashboardHeader =({}) => {
    
    
    return(
        <styled.DashboardHeaderWrapper>
            <styled.DashboardWelcomeMessage>Welcome, User! This is the temporary dashboard header</styled.DashboardWelcomeMessage>
        </styled.DashboardHeaderWrapper>
    )
}

export default DashboardHeader;