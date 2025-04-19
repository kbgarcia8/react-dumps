import React from "react";
import { useTheme } from "../../../context/ThemeContext.jsx";
import { palette } from "../../../styles/theme.js";
import * as styled from "./Footer.styles.js";

const Footer =({}) => {
    const { theme } = useTheme();

    const footerThemeSwitch = {
        footerBackgroundColor: theme.name == "lightTheme" ? palette.neutral5 : palette.accent,
        footerTextColor: theme.name == "lightTheme" ? palette.secondary1 : palette.primary1
    }
    
    return(
        <styled.FooterWrapper
            $cardShadowColor={footerThemeSwitch.footerBackgroundColor}
            $footerBackgroundColor={footerThemeSwitch.footerBackgroundColor}
        >
            <styled.FooterMessage
                $footerTextColor={footerThemeSwitch.footerTextColor}              
            >
                © Copyright 2025 Kain at Kape. All Rights Reserved. Website designed and created by KK Team.
            </styled.FooterMessage>
        </styled.FooterWrapper>
    )
}

export default Footer;