import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styles";

const GenericButton = ({
    processClick,
    id,
    buttonType,
    source,
    alt="no-image",
    text="",
}) => {

    return (
        <Button
            onClick={processClick}
            id={id}
            type={buttonType}
        >
            {source && <img src={source} alt={alt} />}
            {text && <span id={id}>{text}</span>}
        </Button>
    )
}

GenericButton.propTypes = {
    processClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    buttonType: PropTypes.string,
    source: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
}

export default GenericButton;