import { React, useState } from "react";
import PropTypes from "prop-types";
import navbarLogo from '../../../assets/column-logo.png'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeProvider';
import * as styled from "./Navbar.styles";

const Navbar =({anchorTheme}) => {
    const { theme } = useTheme();
    const navigate = useNavigate();
    const [isSigning, setIsSigning] = useState(false);


    const handleLogoClick = (e) => {        
        //navigate('/design');
        setIsSigning(false)
    }

    const handleButtonNavigate = (e) => { 
        const textToLink = {
            "Sign Up": "signup",
            "Login": "login"
        }       
        const buttonText = e.target.textContent
        navigate(`/${textToLink[buttonText]}`)
        setIsSigning(true)
    }

    console.log(isSigning)

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
            {!isSigning && <styled.Navbar>
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
            </styled.Navbar>}
            <styled.ButtonWrapper>
                <styled.NavbarButton2 text={"Sign Up"} onClick={handleButtonNavigate}/>
                <styled.NavbarButton1 text={"Login"} onClick={handleButtonNavigate}/>
            </styled.ButtonWrapper>
        </styled.NavbarWrapper>
    )
}

export default Navbar;