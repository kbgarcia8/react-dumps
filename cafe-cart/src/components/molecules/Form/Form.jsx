import React from "react";
import PropTypes from "prop-types";
import GenericLabel from "../../atoms/Label";
import GenericInput from "../../atoms/Input";
import GenericButton from "../../atoms/Button";
import {LabelAndInputContainer, FormFieldset, FormLegend, Form} from "./Form.styles";

const GenericForm = ({ 
    legendText, 
    id, 
    FormInputs,
    StyledForm,
    StyledLegendComponent,
    StyledLabelComponent,
    StyledInputComponent,
    StyledSubmitButtonComponent,
    StyledCancelButtonComponent,
    StyledDeleteButtonComponent,
    handleSubmit,
    handleCancel,
    handleDelete,
}) => {
    return (
        <StyledForm id={id} >
            <FormFieldset>
                {StyledLegendComponent 
                    ? React.cloneElement(StyledLegendComponent,{})
                    : <FormLegend>{legendText}</FormLegend>}
                {FormInputs.map((input, index) => (
                    <LabelAndInputContainer key={`form-${id}-${index}`}>
                        {StyledLabelComponent
                            ? React.cloneElement(StyledLabelComponent, {
                                htmlFor: input.id,
                                textLabel: input.labelText
                            })
                            : <GenericLabel htmlFor={input.id} textLabel={input.labelText} />
                        }
                        { StyledInputComponent 
                            ? React.cloneElement(StyledInputComponent, {
                                id: input.id,
                                placeholderText: input.placeholderText,
                                onChange: input.onChange,
                                value: input.value,
                                type: input.type,
                                isRequired: input.isRequired,
                                dataKey: input.dataKey,
                                dataIndex: input.dataIndex
                            })
                            : <GenericInput 
                                id={input.id}
                                placeholderText={input.placeholderText}
                                onChange={input.onChange}
                                value={input.value}
                                type={input.type}
                                isRequired={input.isRequired}
                                dataKey={input.dataKey}
                                dataIndex={input.dataIndex}
                            />}
                        </LabelAndInputContainer>
                ))}
                <div className="button-container">
                    {StyledSubmitButtonComponent 
                        ? React.cloneElement(StyledSubmitButtonComponent, {
                                id: StyledSubmitButtonComponent.props.id || `form-${id}-submit`,
                                type: "submit",                                
                                onClick: handleSubmit
                            })
                        : <GenericButton id={`form-${id}-submit`} type={"submit"} text={"Submit"} onClick={handleSubmit} />}
                    {StyledCancelButtonComponent 
                        ? React.cloneElement(StyledCancelButtonComponent, {
                                id: StyledCancelButtonComponent.props.id || `form-${id}-cancel`,
                                type: "button",
                                onClick: handleCancel
                            })
                        : <GenericButton id={`form-${id}-cancel`} type={"button"} text={"Cancel"} onClick={handleCancel}/>}
                    {StyledDeleteButtonComponent 
                        ? React.cloneElement(StyledDeleteButtonComponent, {
                                id: StyledDeleteButtonComponent.props.id || `form-${id}-delete`,
                                type: "button",
                                onClick: handleDelete
                            })
                        : <GenericButton id={`form-${id}-delete`} type={"button"} text={"Delete"} onClick={handleDelete}/>}
                </div>
            </FormFieldset>
        </StyledForm>
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
            dataKey: PropTypes.string,
            dataIndex: PropTypes.number,
        })
    ).isRequired,
    Form: PropTypes.elementType,
    StyledLegendComponent: PropTypes.node,
    StyledLabelComponent: PropTypes.node,
    StyledInputComponent: PropTypes.node,
    StyledSubmitButtonComponent: PropTypes.node,
    StyledCancelButtonComponent: PropTypes.node,
    StyledDeleteButtonComponent: PropTypes.node,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
}

GenericForm.defaultProps = {
    StyledForm: Form,
    StyledFormComponent: null,
    StyledLegendComponent: null,
    StyledLabelComponent: null,
    StyledInputComponent: null,
    StyledSubmitButtonComponent: null,
    StyledCancelButtonComponent: null,
    StyledDeleteButtonComponent: null,
}

export default GenericForm;