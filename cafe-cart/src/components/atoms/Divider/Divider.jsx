import React from "react";
import PropTypes from "prop-types";
import { DividerContainer, DividerLine, DividerText } from "./Divider.styles";
import { useTheme } from '../../../context/ThemeProvider';


const Divider = ({ dividerText, lineColor, textColor, screenColor }) => {
    const { theme, toggleTheme } = useTheme();
    
    return(
        <DividerContainer>
            <DividerLine lineColor={lineColor ? lineColor : theme.backgroundColor1}>
            {dividerText && 
            <DividerText 
                textColor={textColor ? textColor : theme.textColor1} 
                screenColor={screenColor ? screenColor : theme.screenColor}>{dividerText}</DividerText>}
            </DividerLine>
        </DividerContainer>
    );
}

Divider.propTypes = {
    dividerText: PropTypes.string,
    lineColor: PropTypes.string
}

export default Divider;