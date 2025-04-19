import { React, useState } from "react";
import headerLogo from '../../../assets/horizontal-logo.png'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../molecules/Navbar/Navbar";
import * as styled from "./MainHeader.styles.js";

const MainHeader =({}) => {
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleLogoClick = (e) => {
        navigate('/');
        setIsSignedIn(false)
    }

    const handleButtonNavigate = (e) => { 
        const textToLink = {
            "Sign Up": "signup",
            "Login": "login",
            //"Dashboard": "dashboard" //tempoarary logged in
        }       
        const buttonText = e.target.textContent
        navigate(`/${textToLink[buttonText]}`)
        setIsSignedIn(true)
    }
    
    return(
        <styled.MainHeaderWrapper>
            <styled.MainHeaderLogoSpace>
                <styled.MainHeaderLogo onClick={handleLogoClick} src={headerLogo} />
            </styled.MainHeaderLogoSpace>
                <Navbar isSigning={isSignedIn}/>
            <styled.ButtonWrapper>
                <styled.SignUpButton text={"Sign Up"} onClick={handleButtonNavigate}/>
                <styled.LoginButton text={"Login"} onClick={handleButtonNavigate}/>
            </styled.ButtonWrapper>
        </styled.MainHeaderWrapper>
    )
}

export default MainHeader;