import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem.styles";

export const GenericListItem = ({
    key, 
    id,
    dataValue,
    dataIndex,
    listText,
    className
}) => {
    return(
        <>
            <ListItem
                key={key}
                id={id}
                data-value={dataValue}
                data-index={dataIndex}
                className={className}
            >{listText}</ListItem>
        </>
    )
}

GenericListItem.propTypes = {
    key: PropTypes.string,
    id: PropTypes.string,
    dataValue: PropTypes.string,
    dataIndex: PropTypes.number,
    className: PropTypes.string
}

export default GenericListItem;