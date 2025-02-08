import {React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import * as styled from "./Footer.styles";

const Footer =({}) => {
    const navigate = useNavigate();
    
    return(
        <styled.FooterWrapper>
            <p>This is the temporary Footer</p>
        </styled.FooterWrapper>
    )
}

export default Footer;