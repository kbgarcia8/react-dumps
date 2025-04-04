import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Input from "./Input.styles";

const GenericInput = forwardRef(({ 
    id,
    placeholderText,
    onChange,
    value,
    type,
    isRequired,
    dataAttributes,
    checked,
    className
}, ref) => {
    return (
        <Input
            id={id}
            name={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            type={type}
            required={isRequired}
            {...dataAttributes}
            className={className}
            ref={ref}
            checked={checked}
        />
    );
});

GenericInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    dataAttributes: PropTypes.object, 
    checked: PropTypes.bool,
    className: PropTypes.string,
    ref: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any })
    ])
};

export default GenericInput;
