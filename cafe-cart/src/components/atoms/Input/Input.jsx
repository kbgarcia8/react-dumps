import React from "react";
import PropTypes from "prop-types";
import Input from "./Input.styles";

export const GenericInput = ({ 
    id,
    placeholderText,
    onChange,
    value,
    type,
    isRequired,
    dataKey,
    dataIndex,
    className
}) => {
    return (
        <>
            <Input
                id={id}
                name={id}
                placeholder={placeholderText}
                onChange={onChange}
                value={value}
                type={type}
                required={isRequired ? "required" : ""}
                data-key={dataKey}
                data-index={dataIndex}
                className={className}
            />
        </>
    )
}

GenericInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    type: PropTypes.string,
    isRequired: PropTypes.bool,
    dataKey: PropTypes.string,
    dataIndex: PropTypes.number
}

export default GenericInput;