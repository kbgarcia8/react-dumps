import React from "react";
import PropTypes from "prop-types";
import { IconContainer, IconImage } from "./Icon.styles";

const Icon = ({source, alt="no-image"}) => {
    return (
        <IconContainer>
            <IconImage src={source} alt={alt} />
        </IconContainer>
    );
}

Icon.propTypes = {
    source: PropTypes.string,
    alt: PropTypes.string
}

export default Icon;