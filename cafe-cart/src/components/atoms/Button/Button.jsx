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
    dataKey,
    dataCart
}) => {

    return (
        <Button
            onClick={onClick}
            id={id}
            type={buttonType}
            className={className}
            data-key={dataKey}
            data-cart={dataCart}
        >
            <div className="button-icon-and-text">
                {source && <img src={source} alt={alt} data-key={dataKey} />}
                {text && <span id={id} data-key={dataKey} >{text}</span>}
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
    dataKey: PropTypes.string
}

export default GenericButton;