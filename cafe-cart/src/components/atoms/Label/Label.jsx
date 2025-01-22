import React from "react";
import PropTypes from "prop-types";
import Label from "./Label.styles";

const GenericLabel = ({htmlFor, textLabel, className}) => {
    return(
        <Label htmlFor={htmlFor} className={className}>
            {textLabel}
        </Label>
    )
}

GenericLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
}

export default GenericLabel;