import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styles";

const GenericButton = ({
    onClick,
    id,
    buttonType,
    source,
    alt="image",
    text="",
}) => {

    return (
        <Button
            onClick={onClick}
            id={id}
            type={buttonType}
        >
            <div className="button-icon-and-text">
                {source && <img src={source} alt={alt} />}
                {text && <span id={id}>{text}</span>}
            </div>
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