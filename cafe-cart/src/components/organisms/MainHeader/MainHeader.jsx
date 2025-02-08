import { Children, React, useState } from "react";
import PropTypes from "prop-types";
import headerLogo from '../../../assets/horizontal-logo.png'
import { useNavigate } from 'react-router-dom';
import Navbar from "../../molecules/Navbar/Navbar";
import * as styled from "./MainHeader.styles";

const MainHeader =({}) => {
    const navigate = useNavigate();
    const [isSigning, setIsSigning] = useState(false);


    const handleLogoClick = (e) => {        
        //navigate('/design');
        navigate('/');
        setIsSigning(false)
    }

    const handleButtonNavigate = (e) => { 
        const textToLink = {
            "Sign Up": "signup",
            "Login": "login",
            "Dashboard": "dashboard" //tempoarary logged in
        }       
        const buttonText = e.target.textContent
        navigate(`/${textToLink[buttonText]}`)
        setIsSigning(true)
    }
    
    return(
        <styled.MainHeaderWrapper>
            <styled.MainHeaderLogoSpace>
                <styled.MainHeaderLogo onClick={handleLogoClick} src={headerLogo} />
            </styled.MainHeaderLogoSpace>
                <Navbar isSigning={isSigning}/>
            <styled.ButtonWrapper>
                <styled.MainHeaderButton2 text={"Sign Up"} onClick={handleButtonNavigate}/>
                <styled.MainHeaderButton1 text={"Login"} onClick={handleButtonNavigate}/>
                <styled.MainHeaderButton1 text={"Dashboard"} onClick={handleButtonNavigate}/>
            </styled.ButtonWrapper>
        </styled.MainHeaderWrapper>
    )
}

export default MainHeader;