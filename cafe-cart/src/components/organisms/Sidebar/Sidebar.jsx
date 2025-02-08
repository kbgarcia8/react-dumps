import {React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import sidebarLogo from '../../../assets/pic-only-logo.png'
import HomeIcon from "../../atoms/SVG/HomeIcon";
import MenuIcon from "../../atoms/SVG/MenuIcon";
import CartIcon from "../../atoms/SVG/CartIcon";
import ClipboardIcon from "../../atoms/SVG/ClipboardIcon";
import TimerIcon from "../../atoms/SVG/TimerIcon";

import * as styled from "./Sidebar.styles";

const Sidebar =({}) => {
    const handleLogoClick = (e) => {
        navigate('/');
    }

    const mainControls = [
        {value: "Home", path:"/home", icon: <HomeIcon/>},
        {value: "Menu", path:"/menu", icon: <MenuIcon/>},
        {value: "Cart", path:"/cart", icon: <CartIcon/>},
        {value: "Orders", path:"/orders", icon: <ClipboardIcon/>},
        {value: "Pending", path:"/pending", icon: <TimerIcon/>},
    ]
    
    return(
        <styled.SidebarWrapper>
            <styled.SidebarLogoSpace>
                <styled.SidebarLogo src={sidebarLogo} onClick={handleLogoClick}/>
            </styled.SidebarLogoSpace>
            <styled.SidebarMainControlsSpace>                
                {mainControls.map((control,index) => (
                    <styled.StyledLinkWithImage>
                        {control.icon}
                    </styled.StyledLinkWithImage>
                ))}
            </styled.SidebarMainControlsSpace>
        </styled.SidebarWrapper>
    )
}

export default Sidebar;