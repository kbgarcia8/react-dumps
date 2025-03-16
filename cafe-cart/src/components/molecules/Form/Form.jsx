import React from "react";
import PropTypes from "prop-types";
import GenericLabel from "../../atoms/Label";
import GenericInput from "../../atoms/Input";
import GenericButton from "../../atoms/Button";
import * as styled from "./Form.styles";
import { data } from "react-router-dom";

const GenericForm = ({
    fieldsets = null,
    legendText,
    id, 
    formInputs, //object that contains the input fields information to make it reusable
    labelClassName,
    inputClassName,
    editableOnChange,
    hasSubmit = false,
    hasCancel = false,
    hasDelete = false,
    submitText,
    handleSubmit,
    handleCancel,
    handleDelete,
    className
}) => {
    {/*console.dir(fieldsets, { depth: null });*/}
    return (
        <styled.Form id={`${id}-form`} className={className}>
            {fieldsets !== null
                ? fieldsets.map((field, fieldIndex) => (
                    <styled.FormFieldset key={`${field.legend}-${fieldIndex}`} id={`${id}-form-fieldset-${fieldIndex}`} $fieldHeight={field.height}>
                        <styled.FormLegend>{field.legend}</styled.FormLegend>
                        {field['inputs'].map((input, inputIndex) => (
                            <React.Fragment key={`form-${id}-${inputIndex}`}>
                            <styled.LabelAndInputContainer className={"label-input-container"}>                        
                                {input.type !== "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText} additionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.svg} className={labelClassName} />}
                                    <GenericInput
                                        id={input.id}
                                        placeholderText={input.placeholderText}
                                        onChange={input.mainOnChange}
                                        value={input.value}
                                        type={input.type}
                                        isRequired={input.isRequired}
                                        {...input.dataAttributes}
                                        className={inputClassName}
                                        checked={input.checked}
                                    />
                                {input.type === "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText} addtionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.image} className={labelClassName} />}
                                {(input.editable && input.type ==="radio") && 
                                    <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                                        <GenericButton id={`edit-radio-${input.id}-edit`} svg={input.editIcon} type={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        <GenericButton id={`edit-radio-${input.id}-delete`} svg={input.deleteIcon} type={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                    </styled.EditableInputButtonContainer>                                    
                                }
                            </styled.LabelAndInputContainer>
                            {(input.editable && input.type ==="radio") &&
                                    <styled.FormFieldset className={"editable-input-fieldset"}>
                                        <styled.FormLegend>{`${field.legend} ${inputIndex + 1}`}</styled.FormLegend>
                                        {Object.keys(input['data']).map((keydata, keydataIndex) => (
                                            keydata !== "checked" &&
                                            <styled.LabelAndInputContainer key={`${keydata}-${keydataIndex}`} className={"editable-input-container"}>
                                                <GenericInput
                                                    id={`editable-input-${keydataIndex}`}
                                                    placeholderText={keydata.charAt(0).toUpperCase() + keydata.slice(1)}
                                                    onChange={editableOnChange}
                                                    value={input['data'][keydata]}
                                                    type={"text"}
                                                    isRequired={true}
                                                    className={"editable-input"}
                                                    dataAttributes={{
                                                        "data-index": keydataIndex,
                                                        "data-key": keydata
                                                    }}
                                                />
                                            </styled.LabelAndInputContainer>
                                        ))}
                                    </styled.FormFieldset>}
                            </React.Fragment>
                        ))}
                    </styled.FormFieldset>
                ))
                : <styled.FormFieldset id={id}>
                        <styled.FormLegend>{legendText}</styled.FormLegend>
                        {formInputs.map((input, inputIndex) => (
                            <styled.LabelAndInputContainer key={`form-${id}-${inputIndex}`}>                        
                                {input.type !== "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText}  additionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.svg} className={labelClassName} />}        
                                    <GenericInput
                                        id={input.id}
                                        placeholderText={input.placeholderText}
                                        onChange={input.mainOnChange}
                                        value={input.value}
                                        type={input.type}
                                        isRequired={input.isRequired}
                                        {...input.dataAttributes}
                                        className={inputClassName}
                                    />
                                {input.type === "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText} additionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.svg} className={labelClassName} />}
                                {(input.editable && input.type ==="radio") && 
                                    <styled.ButtonContainer>
                                        <GenericButton id={`edit-radio-${input.id}-edit`} type={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        <GenericButton id={`edit-radio-${input.id}-delete`} type={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                    </styled.ButtonContainer>}
                            </styled.LabelAndInputContainer>
                        ))}                        
                    </styled.FormFieldset>
            }
            <styled.ButtonContainer className={"form-main-button-container"}>
                {hasSubmit && <GenericButton id={`form-${id}-submit`} type={"submit"} text={submitText} onClick={handleSubmit} className={"submit-form-btn"}/>}
                {hasCancel && <GenericButton id={`form-${id}-cancel`} type={"button"} text={"Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}
                {hasDelete && <GenericButton id={`form-${id}-delete`} type={"button"} text={"Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
            </styled.ButtonContainer>
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
            mainOnChange: PropTypes.func.isRequired,
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
    submitText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
}

export default GenericForm;