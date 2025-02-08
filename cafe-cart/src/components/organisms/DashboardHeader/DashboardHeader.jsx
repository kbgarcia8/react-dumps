import { Children, React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import * as styled from "./DashboardHeader.styles";

const DashboardHeader =({}) => {
    
    
    return(
        <styled.DashboardHeaderWrapper>
            <p>Welcome, User! This is the temporary dashboard header</p>
        </styled.DashboardHeaderWrapper>
    )
}

export default DashboardHeader;