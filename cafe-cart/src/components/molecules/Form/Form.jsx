import React from "react";
import PropTypes from "prop-types";
import GenericLabel from "../../atoms/Label";
import GenericInput from "../../atoms/Input";
import GenericButton from "../../atoms/Button";
import * as styled from "./Form.styles";
/*
    1. Modify to accept multiple fieldset or just one of no object
    2. forminputs will be a map of addressBank -> try this
    3. try to clean up react clone element use classname instead
*/
const GenericForm = ({ 
    legendText, 
    id, 
    formInputs, //object that contains the input fields information to make it reusable
    styledLabelComponent,
    styledInputComponent,
    styledSubmitButtonComponent,
    styledCancelButtonComponent,
    styledDeleteButtonComponent,
    handleSubmit,
    handleCancel,
    handleDelete,
}) => {
    return (
        <styled.Form id={id} >
            <FormFieldset>
                <styled.FormLegend>{legendText}</styled.FormLegend>
                {formInputs.map((input, index) => (
                    <LabelAndInputContainer key={`form-${id}-${index}`}>
                        {styledLabelComponent
                            ? React.cloneElement(styledLabelComponent, {
                                htmlFor: input.id,
                                textLabel: input.labelText
                            })
                            : <GenericLabel htmlFor={input.id} textLabel={input.labelText} />
                        }
                        {styledInputComponent 
                            ? React.cloneElement(styledInputComponent, {
                                id: input.id,
                                placeholderText: input.placeholderText,
                                onChange: input.onChange,
                                value: input.value,
                                type: input.type,
                                isRequired: input.isRequired,
                                ...input.dataAttributes
                            })
                            : <GenericInput 
                                id={input.id}
                                placeholderText={input.placeholderText}
                                onChange={input.onChange}
                                value={input.value}
                                type={input.type}
                                isRequired={input.isRequired}
                                {...input.dataAttributes}
                            />}
                        </LabelAndInputContainer>
                ))}
                <div className="button-container">
                    {styledSubmitButtonComponent 
                        ? React.cloneElement(styledSubmitButtonComponent, {
                                id: styledSubmitButtonComponent.props.id || `form-${id}-submit`,
                                type: "submit",                                
                                onClick: handleSubmit
                            })
                        : <GenericButton id={`form-${id}-submit`} type={"submit"} text={"Submit"} onClick={handleSubmit} />}
                    {styledCancelButtonComponent 
                        ? React.cloneElement(styledCancelButtonComponent, {
                                id: styledCancelButtonComponent.props.id || `form-${id}-cancel`,
                                type: "button",
                                onClick: handleCancel
                            })
                        : <GenericButton id={`form-${id}-cancel`} type={"button"} text={"Cancel"} onClick={handleCancel}/>}
                    {styledDeleteButtonComponent 
                        ? React.cloneElement(styledDeleteButtonComponent, {
                                id: styledDeleteButtonComponent.props.id || `form-${id}-delete`,
                                type: "button",
                                onClick: handleDelete
                            })
                        : <GenericButton id={`form-${id}-delete`} type={"button"} text={"Delete"} onClick={handleDelete}/>}
                </div>
            </FormFieldset>
        </styled.Form>
    );
}

GenericForm.propTypes = {
    legendText: PropTypes.string,
    id: PropTypes.string,
    FormInputs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            labelText: PropTypes.string.isRequired,
            placeholderText: PropTypes.string,
            onChange: PropTypes.func.isRequired,
            value: PropTypes.string.isRequired,
            type: PropTypes.string,
            isRequired: PropTypes.bool,
            dataAttributes: PropTypes.object,
        })
    ).isRequired,
    Form: PropTypes.elementType,
    styledInputComponent: PropTypes.node,
    styledSubmitButtonComponent: PropTypes.node,
    styledCancelButtonComponent: PropTypes.node,
    styledDeleteButtonComponent: PropTypes.node,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
}

GenericForm.defaultProps = {
    styledLabelComponent: null,
    styledInputComponent: null,
    styledSubmitButtonComponent: null,
    styledCancelButtonComponent: null,
    styledDeleteButtonComponent: null,
}

export default GenericForm;