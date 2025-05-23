import React from "react";
import PropTypes from "prop-types";
import Label from "./Label.styles.js";

const GenericLabel = ({
    htmlFor, 
    textLabel, 
    addtionalInfo, 
    labelDireciton, 
    source, 
    svg, 
    className,
    children
}) => {
    return(
        <Label htmlFor={htmlFor} className={className} $labelDireciton={labelDireciton}>
            {(source || svg) && <div className={"label-image-container"}>
                {source ? <img src={source} alt={alt} /> : svg ? svg : ''}
            </div>}
            <span className={"main-label"}>{textLabel}</span>
            {addtionalInfo && <span className={"additional-info"} >{addtionalInfo}</span>}
            {children}
        </Label>
    )
}

GenericLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    textLabel: PropTypes.string.isRequired,
}

export default GenericLabel;