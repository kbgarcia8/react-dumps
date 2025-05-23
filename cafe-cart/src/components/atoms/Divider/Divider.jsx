import React from "react";
import PropTypes from "prop-types";
import { DividerContainer, DividerLine, DividerText } from "./Divider.styles.js";
import { useTheme } from '../../../context/ThemeContext.jsx';


const Divider = ({ dividerText, lineColor, textColor, screenColor, className }) => {
    const { theme } = useTheme();
    
    return(
        <DividerContainer className={className}>
            <DividerLine $lineColor={lineColor ? lineColor : theme.backgroundColor1}>
            {dividerText && 
            <DividerText 
                $textColor={textColor ? textColor : theme.textColor1} 
                $screenColor={screenColor ? screenColor : theme.screenColor}
            >{dividerText}</DividerText>}
            </DividerLine>
        </DividerContainer>
    );
}

Divider.propTypes = {
    dividerText: PropTypes.string,
    lineColor: PropTypes.string
}

export default Divider;