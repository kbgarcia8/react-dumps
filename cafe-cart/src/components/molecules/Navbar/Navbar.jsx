import React from "react";
import PropTypes from "prop-types";
import navbarLogo from '../../../assets/column-logo.png'
import { useNavigate, Link } from 'react-router-dom';
import * as styled from "./Navbar.styles";

const Navbar =({}) => {
    const navigate = useNavigate();
    const navmenu = ["Home", "About", "Testimonials","Contact Us"]
    const handleLogoClick = (e) => {        
        navigate('/');
    }
    const handleLinkClick = (e) => {
        console.log(e.target)
    }
    return(
        <styled.NavbarWrapper>
            <styled.NavbarLogoSpace>
                <styled.NavbarLogo onClick={handleLogoClick} src={navbarLogo} />
            </styled.NavbarLogoSpace>
            <styled.NavbarLinks>
                {navmenu.map((menu,index) => 
                    <styled.NavbarLink key={`${menu}-${index}`}>
                        <Link>{menu}</Link>
                    </styled.NavbarLink>
                )}
            </styled.NavbarLinks>
        </styled.NavbarWrapper>
    )
}

export default Navbar;