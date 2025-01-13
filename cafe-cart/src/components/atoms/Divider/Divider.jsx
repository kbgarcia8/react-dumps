import React from "react";
import PropTypes from "prop-types";
import { DividerContainer, DividerLine, DividerText } from "./Divider.styles";

const Divider = ({ dividerText }) => {
    return(
        <DividerContainer>
            <DividerLine />
            {dividerText && <DividerText>{dividerText}</DividerText>}
            <DividerLine />
        </DividerContainer>
    );
}

Divider.propTypes = {
    dividerText: PropTypes.string
}

export default Divider;