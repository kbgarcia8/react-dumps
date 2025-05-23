import React from "react";
import { useTheme } from '../../../context/ThemeContext.jsx';
import * as styled from "./Navbar.styles.js";

const Navbar =({anchorTheme, isSigning}) => {
    const { theme } = useTheme();

    const links = [
        {name: "Home", path:"/"},
        {name: "Testimonials", path:"/testimonials"},
        {name: "Contact Us", path:"/contact"},
    ];
    return(
        <>
        {!isSigning && 
            <styled.Navbar>
                <styled.NavbarLinks>
                    {links.map((link,index) => 
                        <styled.NavbarLink key={`${link}-${index}`}>
                            <styled.StyledLink
                                to={link.path}
                                $anchorTheme={anchorTheme ? anchorTheme : theme}
                            >{link.name}</styled.StyledLink>
                        </styled.NavbarLink>
                    )}
                </styled.NavbarLinks>
            </styled.Navbar>}
        </>
    )
}

export default Navbar;