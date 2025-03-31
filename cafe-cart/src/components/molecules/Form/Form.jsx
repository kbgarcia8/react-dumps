import React from "react";
import PropTypes from "prop-types";
import GenericButton from "../../atoms/Button";
import GenericInput from "../../atoms/Input"
import * as styled from "./Form.styles";

const GenericForm = ({
    fieldsets = null, // if form has differrent fieldsets
    legendText, // if form has no fieldsets this is required
    fieldHeight, // if form has no fieldsets this is required
    isExpandable = false, // if form has no fieldsets this is required
    id, 
    formInputs, //object that contains the input fields information to make it reusable
    labelClassName,
    inputClassName,
    editableOnChange,
    addInputFunction,
    hasSubmit = false,
    hasCancel = false,
    hasDelete = false,
    submitText,
    handleSubmit,
    handleCancel,
    handleDelete,
    className
}) => {
    {/*console.dir(paymentFieldSet, { depth: null });*/}
    return (
        <styled.Form id={`${id}-form`} className={className} onSubmit={handleSubmit}>
            {fieldsets !== null
                ? fieldsets.map((field, fieldIndex) => (
                    <styled.FieldsetWrapper key={`${field.legend}-${fieldIndex}`} $fieldHeight={field.height}>
                        <styled.FormFieldset id={`${id}-form-fieldset-${fieldIndex}`}>
                            <styled.FormLegend>{field.legend}</styled.FormLegend>
                            {field['inputs'].length !== 0
                            ? field['inputs'].map((input, inputIndex) => (
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
                                            dataAttributes={input.dataAttributes}
                                            className={inputClassName}
                                            checked={!!input.data?.checked}
                                        />
                                    {input.type === "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText} addtionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.image} className={labelClassName} />}
                                    {(input.editable && input.type ==="radio") &&
                                        <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                                            <GenericButton id={`edit-radio-${input.id}-edit`} svg={input.editIcon} buttonType={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                            <GenericButton id={`edit-radio-${input.id}-delete`} svg={input.deleteIcon} buttonType={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        </styled.EditableInputButtonContainer>                                    
                                    }
                                </styled.LabelAndInputContainer>
                                {(input.editable && input.type ==="radio" && input['data']['editing']) && 
                                        <styled.FormFieldset className={"editable-input-fieldset"}>
                                            <styled.FormLegend>{`${field.legend} ${inputIndex + 1}`}</styled.FormLegend>
                                            {Object.keys(input['data']).map((keydata, keydataIndex) => (
                                                (keydata !== "checked" && keydata !== "editing") &&
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
                                                            "data-index": inputIndex, //should be inputIndex to correspond to radio button index and not with input increment
                                                            "data-key": keydata
                                                        }}
                                                    />
                                                </styled.LabelAndInputContainer>
                                            ))}                                            
                                            <styled.ButtonContainer className={"editable-input-button-space"}>
                                                <GenericButton id={`editable-input-${inputIndex}-submit`} buttonType={"submit"} text={"Save"} onClick={input.onClickSave} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                                <GenericButton id={`editable-input-${inputIndex}-cancel`} buttonType={"button"} text={"Cancel"} onClick={input.onClickCancel} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                                <GenericButton id={`editable-input-${inputIndex}-delete`} buttonType={"button"} text={"Delete"} onClick={input.onClickDelete} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            </styled.ButtonContainer>
                                        </styled.FormFieldset>}
                                </React.Fragment>
                            ))
                            : <styled.FieldsetNoEntryMessage>{`No entry yet on ${field.legend}. Please click "+" button to add`}</styled.FieldsetNoEntryMessage>}
                        </styled.FormFieldset>
                        {field.expandable && <styled.ButtonContainer className={"add-input-button-space"}>
                            <GenericButton id={`expand-${field.legend}-inputs`} buttonType={"button"} text={"+"} onClick={addInputFunction} className={`add-input-entry`}/>
                        </styled.ButtonContainer>}
                    </styled.FieldsetWrapper>
                ))
                : <styled.FieldsetWrapper $fieldHeight={fieldHeight}>
                    <styled.FormFieldset id={`${id}-form-fieldset`}>
                        <styled.FormLegend>{legendText}</styled.FormLegend>
                        {formInputs.length !== 0
                        ? formInputs.map((input, inputIndex) => (
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
                                        dataAttributes={input.dataAttributes}
                                        className={inputClassName}
                                        checked={!!input.data?.checked}
                                    />
                                {input.type === "radio" && <styled.FormLabel htmlFor={input.id} textLabel={input.labelText} addtionalInfo={input.additionalInfo} $labelDirection={input.labelDirection} svg={input.image} className={labelClassName} />}
                                {(input.editable && input.type ==="radio") &&
                                    <styled.EditableInputButtonContainer className={"input-edit-buttons"}>
                                        <GenericButton id={`edit-radio-${input.id}-edit`} svg={input.editIcon} buttonType={"button"} onClick={input.onClickEdit} className={`edit-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                        <GenericButton id={`edit-radio-${input.id}-delete`} svg={input.deleteIcon} buttonType={"button"} onClick={input.onClickDelete} className={`delete-radio-${inputIndex}`} dataAttributes={input.dataAttributes}/>
                                    </styled.EditableInputButtonContainer>                                    
                                }
                            </styled.LabelAndInputContainer>
                            {(input.editable && input.type ==="radio" && input['data']['editing']) && 
                                    <styled.FormFieldset className={"editable-input-fieldset"}>
                                        <styled.FormLegend>{`${field.legend} ${inputIndex + 1}`}</styled.FormLegend>
                                        {Object.keys(input['data']).map((keydata, keydataIndex) => (
                                            (keydata !== "checked" && keydata !== "editing") &&
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
                                                        "data-index": inputIndex, //should be inputIndex to correspond to radio button index and not with input increment
                                                        "data-key": keydata
                                                    }}
                                                />
                                            </styled.LabelAndInputContainer>
                                        ))}                                            
                                        <styled.ButtonContainer className={"editable-input-button-space"}>
                                            <GenericButton id={`editable-input-${inputIndex}-submit`} buttonType={"submit"} text={"Save"} onClick={input.onClickSave} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            <GenericButton id={`editable-input-${inputIndex}-cancel`} buttonType={"button"} text={"Cancel"} onClick={input.onClickCancel} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                            <GenericButton id={`editable-input-${inputIndex}-delete`} buttonType={"button"} text={"Delete"} onClick={input.onClickDelete} className={"editable-input-btn"} dataAttributes={{"data-index": inputIndex}}/>
                                        </styled.ButtonContainer>
                                    </styled.FormFieldset>}
                            </React.Fragment>
                        ))
                        : (isExpandable ? (<styled.FieldsetNoEntryMessage>{`No entry yet on ${legendText}. Please click "+" button to add`}</styled.FieldsetNoEntryMessage>) : "")
                        }
                    </styled.FormFieldset>
                    {isExpandable && <styled.ButtonContainer className={"add-input-button-space"}>
                        <GenericButton id={`expand-${legendText}-inputs`} buttonType={"button"} text={"+"} onClick={addInputFunction} className={`add-input-entry`}/>
                    </styled.ButtonContainer>}
                </styled.FieldsetWrapper>
            }
            <styled.ButtonContainer className={"form-main-button-container"}>
                {hasSubmit && <GenericButton id={`form-${id}-submit`} buttonType={"submit"} text={submitText} onClick={handleSubmit} className={"submit-form-btn"}/>}
                {hasCancel && <GenericButton id={`form-${id}-cancel`} buttonType={"button"} text={"Cancel"} onClick={handleCancel} className={"cancel-form-btn"}/>}
                {hasDelete && <GenericButton id={`form-${id}-delete`} buttonType={"button"} text={"Delete"} onClick={handleDelete} className={"delete-form-btn"}/>}
            </styled.ButtonContainer>
        </styled.Form>
    );
}

//Props Validation
const validateEditableData = (props, propName, componentName) => {
    const inputs = props.fieldsets?.flatMap(fieldset => fieldset.inputs) || [];

    for (const input of inputs) {
        if (input.editable) {
            if (
                typeof input.data !== "object" ||
                !input.data.hasOwnProperty("editing") ||
                typeof input.data.editing !== "boolean"
            ) {
                return new Error(
                    `Invalid prop \`data\` in \`${componentName}\`. When \`editable\` is true, \`data\` must have an \`editing\` key with a boolean value.`
                );
            }

            // Ensure required editable-related props are present
            const requiredProps = ["onClickEdit", "editIcon", "onClickDelete", "deleteIcon", "onClickSave", "onClickCancel"];
            for (const key of requiredProps) {
                if (typeof input[key] === "undefined") {
                    return new Error(
                        `Invalid prop \`${key}\` in \`${componentName}\`. This prop is required when \`editable\` is true.`
                    );
                }
            }
        }

        // Validation for radio inputs
        if (input.type === "radio") {
            if (
                typeof input.data !== "object" ||
                !input.data.hasOwnProperty("checked") ||
                typeof input.data.checked !== "boolean"
            ) {
                return new Error(
                    `Invalid prop \`data\` in \`${componentName}\`. When \`type\` is "radio", \`data\` must have a \`checked\` key with a boolean value.`
                );
            }
        }
    }
    return null;
};
/*
    PropTypes by default are considered function that takes argument as follows: function/PropTypes (props, propName, componentName, location, propFullName)
*/
GenericForm.propTypes = {
    fieldsets: (props, propName, componentName) => {
        //PropTypes.checkPropTypes(propTypes, props, propName, componentName, location, propFullName);
        const propTypesError = PropTypes.checkPropTypes(
            {
                fieldsets: PropTypes.arrayOf(
                    PropTypes.shape({
                        legend: PropTypes.string.isRequired,
                        inputs: PropTypes.arrayOf(
                            PropTypes.shape({
                                labelText: PropTypes.string,
                                additionalInfo: PropTypes.string,
                                labelDirection: PropTypes.string.isRequired,
                                id: PropTypes.string.isRequired,
                                placeholderText: PropTypes.string,
                                editable: PropTypes.bool, 
                                mainOnChange: PropTypes.func,
                                onClickEdit: PropTypes.func,
                                editIcon: PropTypes.element,
                                onClickDelete: PropTypes.func,
                                deleteIcon: PropTypes.element,
                                onClickSave: PropTypes.func,
                                onClickCancel: PropTypes.func,
                                type: PropTypes.string,
                                isRequired: PropTypes.bool,
                                data: PropTypes.object,
                                dataAttributes: PropTypes.object,
                            })
                        ),
                        height: PropTypes.string,
                        expandable: PropTypes.bool,
                    })
                ),
            },
            props,
            propName,
            componentName,
            "prop",
            "GenericForm"
        );

        if (propTypesError) {
            return propTypesError;
        }

        return validateEditableData(props, propName, componentName);
    },
    legendText: PropTypes.string,
    id: PropTypes.string,
    formInputs: PropTypes.array,
    labelClassName: PropTypes.string,
    inputClassName: PropTypes.string,
    hasSubmit: PropTypes.bool,
    hasCancel: PropTypes.bool,
    hasDelete: PropTypes.bool,
    submitText: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    handleDelete: PropTypes.func,
};


export default GenericForm;