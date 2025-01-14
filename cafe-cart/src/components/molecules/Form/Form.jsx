import React from "react";
import PropTypes from "prop-types";
import Form from "./Form.styles";

const GenericForm = ({ legendText }) => {
    return (
        <Form>
            <fieldset>
                <legend>{legendText}</legend>
            </fieldset>
        </Form>
    );
}

export default GenericForm;