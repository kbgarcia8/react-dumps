import {React, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../../context/UserAuthContext";
import sidebarLogo from '../../../assets/pic-only-logo.png'
import HomeIcon from "../../atoms/SVG/HomeIcon.jsx";
import MenuIcon from "../../atoms/SVG/MenuIcon.jsx";
import CartIcon from "../../atoms/SVG/CartIcon.jsx";
import ClipboardIcon from "../../atoms/SVG/ClipboardIcon.jsx";
import TimerIcon from "../../atoms/SVG/TimerIcon.jsx";
import SettingsIcon from "../../atoms/SVG/SettingsIcon.jsx";
import LogoutIcon from "../../atoms/SVG/LogoutIcon.jsx";
import * as styled from "./Sidebar.styles.js";

const Sidebar =({}) => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    const handleLogoClick = (e) => {
        navigate('/');
    }

    const mainControls = [
        {name: "Home", path:"", icon: <HomeIcon/>},
        {name: "Menu", path:"/menu", icon: <MenuIcon/>},
        {name: "Cart", path:"/cart", icon: <CartIcon/>},
        {name: "Pending", path:"/pending", icon: <TimerIcon/>},
        {name: "Orders", path:"/orders", icon: <ClipboardIcon/>},        
    ]

    const settingControls = [
        {name: "Settings", path:"/settings", icon: <SettingsIcon/>},
        {name: "Logout", path:"/login", icon: <LogoutIcon/>}
    ]
    
    return(
        <styled.SidebarWrapper>
            <styled.SidebarLogoSpace>
                <styled.SidebarLogo src={sidebarLogo} onClick={handleLogoClick}/>
            </styled.SidebarLogoSpace>
            <styled.SidebarMainControlsSpace>                
                {mainControls.map((mainControl,index) => (
                    <styled.StyledLinkWithImage
                        key={`${mainControl.name}-${index}`}
                        to={`../dashboard${mainControl.path}`}                        
                    >
                        {mainControl.icon}
                    </styled.StyledLinkWithImage>
                ))}
            </styled.SidebarMainControlsSpace>
            <styled.SidebarSettingsSpace>
                {settingControls.map((settingControl,index) => (
                    <styled.StyledLinkWithImage 
                        key={`${settingControl.name}-${index}`}
                        to={settingControl.name=="Settings" ? `../dashboard${settingControl.path}` : `${settingControl.path}`}
                        onClick={settingControl.name=="Logout" && logOut}
                    >
                        {settingControl.icon}
                    </styled.StyledLinkWithImage>
                ))}
            </styled.SidebarSettingsSpace>
        </styled.SidebarWrapper>
    )
}

export default Sidebar;