import React from "react";
import PropTypes from "prop-types";
import TextArea from "./TextArea.stlyes.js";

export const GenericTextArea = ({
    labelText, 
    id,
    placeholderText, 
    onChange,
    value,
    rows,
    cols,
    dataKey,
    dataIndex
}) => {
    return (
        <>
        <TextArea
            id={id}
            placeholder={placeholderText}
            onChange={onChange}
            value={value}
            rows={rows}
            cols={cols}
            data-key={dataKey}
            data-index={dataIndex}
        />
        </>
    );
}

GenericTextArea.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    rows: PropTypes.string,
    cols: PropTypes.string,
    dataKey: PropTypes.string,
    dataIndex: PropTypes.number
};

export default GenericTextArea;

