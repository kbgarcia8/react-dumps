import React from "react";
import PropTypes from "prop-types";

const ComponentTester = ({ children }) => {

    return (
        <div>
            {children}
        </div>
    )
}

ComponentTester.propTypes = {
    children: PropTypes.node.isRequired
}

export default ComponentTester;