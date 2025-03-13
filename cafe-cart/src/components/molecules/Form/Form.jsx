import React from "react";
import PropTypes from "prop-types";
import GenericLabel from "../../atoms/Label";
import GenericInput from "../../atoms/Input";
import GenericButton from "../../atoms/Button";
import * as styled from "./Form.styles";

const GenericForm = ({
    fieldsets = null,
    legendText, 
    id, 
    formInputs, //object that contains the input fields information to make it reusable
    labelClassName,
    inputClassName,
    hasSubmit = false,
    hasCancel = false,
    hasDelete = false,
    handleSubmit,
    handleCancel,
    handleDelete,
    className
}) => {
    console.log(fieldsets)
    return (
        <styled.Form id={id} className={className}>
            {fieldsets !== null
                ? fieldsets.map((field, index) => (
                    <styled.FormFieldset key={`${field.legend}-${index}`} id={id}>
                        <styled.FormLegend>{field.legend}</styled.FormLegend>
                        {field['inputs'].map((input, index) => (
                            <styled.LabelAndInputContainer key={`form-${id}-${index}`} className={"label-input-container"}>                        
                                {input.type !== "radio" && <GenericLabel htmlFor={input.id} textLabel={input.labelText} className={labelClassName} />}
                                    <GenericInput
                                        id={input.id}
                                        placeholderText={input.placeholderText}
                                        onChange={input.onChange}
                                        value={input.value}
                                        type={input.type}
                                        isRequired={input.isRequired}
                                        {...input.dataAttributes}
                                        className={inputClassName}
                                    />
                                {input.type === "radio" && <GenericLabel htmlFor={input.id} textLabel={input.labelText} className={labelClassName} />}
                            </styled.LabelAndInputContainer>
                        ))}
                        <styled.ButtonContainer>
                            {hasSubmit && <GenericButton id={`form-${id}-submit`} type={"submit"} text={"Submit"} onClick={handleSubmit} className={"submit-btn"}/>}
                            {hasCancel && <GenericButton id={`form-${id}-cancel`} type={"button"} text={"Cancel"} onClick={handleCancel} className={"cancel-btn"}/>}
                            {hasDelete && <GenericButton id={`form-${id}-delete`} type={"button"} text={"Delete"} onClick={handleDelete} className={"delete-btn"}/>}
                        </styled.ButtonContainer>
                    </styled.FormFieldset>
                ))
                : <styled.FormFieldset id={id}>
                        <styled.FormLegend>{legendText}</styled.FormLegend>
                        {formInputs.map((input, index) => (
                            <styled.LabelAndInputContainer key={`form-${id}-${index}`}>                        
                                {input.type !== "radio" && <GenericLabel htmlFor={input.id} textLabel={input.labelText} className={labelClassName} />}        
                                    <GenericInput
                                        id={input.id}
                                        placeholderText={input.placeholderText}
                                        onChange={input.onChange}
                                        value={input.value}
                                        type={input.type}
                                        isRequired={input.isRequired}
                                        {...input.dataAttributes}
                                        className={inputClassName}
                                    />
                                {input.type === "radio" && <GenericLabel htmlFor={input.id} textLabel={input.labelText} className={labelClassName} />}
                            </styled.LabelAndInputContainer>
                        ))}
                        <styled.ButtonContainer>
                            {hasSubmit && <GenericButton id={`form-${id}-submit`} type={"submit"} text={"Submit"} onClick={handleSubmit} className={"submit-btn"}/>}
                            {hasCancel && <GenericButton id={`form-${id}-cancel`} type={"button"} text={"Cancel"} onClick={handleCancel} className={"cancel-btn"}/>}
                            {hasDelete && <GenericButton id={`form-${id}-delete`} type={"button"} text={"Delete"} onClick={handleDelete} className={"delete-btn"}/>}
                        </styled.ButtonContainer>
                    </styled.FormFieldset>
            }
        </styled.Form>
    );
}
GenericForm.propTypes = {
    fieldsets: PropTypes.arrayOf(
        PropTypes.shape({
            legend: PropTypes.string.isRequired,
            inputs: PropTypes.array
        })
    ),
    legendText: PropTypes.string,
    id: PropTypes.string,
    formInputs: PropTypes.arrayOf(
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
    ),
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    hasSubmit: PropTypes.bool,
    hasCancel: PropTypes.bool,
    hasDelete: PropTypes.bool,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
}

export default GenericForm;