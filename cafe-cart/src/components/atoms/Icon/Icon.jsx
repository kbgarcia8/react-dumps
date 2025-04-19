import React from "react";
import PropTypes from "prop-types";
import { IconContainer, IconImage } from "./Icon.styles.js";

const Icon = ({source, alt="no-image", className}) => {
    
    return (
        <IconContainer>
            <IconImage src={source} alt={alt} className={className}/>
        </IconContainer>
    );
}

Icon.propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string
}

export default Icon;