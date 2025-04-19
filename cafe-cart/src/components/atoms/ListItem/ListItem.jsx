import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem.styles.js";

export const GenericListItem = ({
    id,
    dataValue,
    dataIndex,
    children,
    className
}) => {
    return(
        <>
            <ListItem
                id={id}
                data-value={dataValue}
                data-index={dataIndex}
                className={className}
            >{children}</ListItem>
        </>
    )
}

GenericListItem.propTypes = {
    id: PropTypes.string,
    dataValue: PropTypes.string,
    dataIndex: PropTypes.number,
    className: PropTypes.string,
    children: PropTypes.node
}

export default GenericListItem;