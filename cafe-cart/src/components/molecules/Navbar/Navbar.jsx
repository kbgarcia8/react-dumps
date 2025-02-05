import React from "react";
import PropTypes from "prop-types";
import navbarLogo from '../../../assets/column-logo.png'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeProvider';
import * as styled from "./Navbar.styles";

const Navbar =({anchorTheme}) => {
    const { theme } = useTheme();

    const navigate = useNavigate();
    const handleLogoClick = (e) => {        
        navigate('/design');
    }
    const links = [
        {name: "Home", path:"/"},
        {name: "About", path:"/about"},
        {name: "Testimonials", path:"/testimonials"},
        {name: "Contact Us", path:"/contact"},
      ];
    return(
        <styled.NavbarWrapper>
            <styled.NavbarLogoSpace>
                <styled.NavbarLogo onClick={handleLogoClick} src={navbarLogo} />
            </styled.NavbarLogoSpace>
            <styled.NavbarLinks>
                {links.map((link,index) => 
                    <styled.NavbarLink key={`${link}-${index}`}>
                        <styled.StyledLink
                            to={link.path}
                            anchorTheme={anchorTheme ? anchorTheme : theme}
                        >{link.name}</styled.StyledLink>
                    </styled.NavbarLink>
                )}
            </styled.NavbarLinks>
        </styled.NavbarWrapper>
    )
}

export default Navbar;