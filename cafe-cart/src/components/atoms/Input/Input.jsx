import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import {Input, TextArea} from "./Input.styles.js";

const GenericInput = forwardRef(({ 
    id,
    placeholderText,
    onChange,
    value,
    type,
    isRequired,
    dataAttributes,
    checked,
    disabled,
    pattern,
    className,
    //needed when input type is textarea
    rows = 5,
    cols = 30,
}, ref) => {
    return (
        type !== "textarea"
        ? <Input
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
            disabled={disabled}
            pattern={pattern}
        />
        : <TextArea
            id={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            rows={rows}
            cols={cols}
            {...dataAttributes}
            className={className}
            ref={ref}
            disabled={disabled}
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
    rows: PropTypes.string,
    cols: PropTypes.string,
};

export default GenericInput;
