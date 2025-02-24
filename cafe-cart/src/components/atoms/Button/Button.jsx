

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
    className,
    dataAttributes
}) => {

    return (
        <Button
            onClick={onClick}
            id={id}
            type={buttonType}
            className={className}
            {...dataAttributes}
        >
            <div className="button-icon-and-text">
                {source && <img src={source} alt={alt} />}
                {text && <span id={id} >{text}</span>}
            </div>
        </Button>
    )
}

GenericButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.string,
    buttonType: PropTypes.string,
    source: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
}

export default GenericButton;