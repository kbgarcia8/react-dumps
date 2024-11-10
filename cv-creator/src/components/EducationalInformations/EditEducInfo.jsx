import { Inputs } from "../Inputs"
import { Button } from "../Button"
import "../../styles/EducationalInformations/EditEducInfo.css"

export function EditEducInfo({
    props, 
    handleEducInfoChange, 
    EducInfoDeletion, 
    handleEducInfoEdit, 
    handleEducInfoSubmit
}) {
        const {
            id,
            universityName,
            degreeFinished,
            educationStartDate,
            educationEndDate,
        } = props
        return(
            <>
            <div className="educ-info-entry" id={id}>
                <div className="educ-info-entry-header">
                    <span>{universityName}</span>
                    <img src="/src/assets/edit.svg" alt="edit-entry" />
                </div>
                <p>{educationStartDate}-{educationEndDate}</p>
            </div>
            <form id={id} onSubmit={(e) => e.preventDefault}>
                <fieldset>
                    <legend></legend>
                    <Inputs
                        id="school-attended"
                        labelText="University/Institute"
                        placeholderText="University Attended"
                        type="text"
                        dataKey="universityName"
                        value={universityName}
                        onChange={handleEducInfoChange}
                    />
                    <Inputs
                        id="degree"
                        labelText="Degree/Major"
                        placeholderText="Degree Finished"
                        type="text"
                        dataKey="degreeFinished"
                        value={degreeFinished}
                        onChange={handleEducInfoChange}
                    />
                    <Inputs
                        id="education-start-date"
                        labelText="Start Date"
                        type="month"
                        dataKey="educationStartDate"
                        value={educationStartDate}
                        onChange={handleEducInfoChange}   
                    />
                    <Inputs
                        id="education-end-date"
                        labelText="End Date"
                        type="month"
                        dataKey="educationEndDate"
                        value={educationEndDate}
                        onChange={handleEducInfoChange}
                    />
                    <div className="new-form-buttons-space">
                        <Button 
                            text="Delete"
                            source="/src/assets/delete.svg"
                            alt="delete-form"
                            className="form-button"
                            id={`delete-educ-info-${id}`}
                        />
                        <Button 
                            text="Cancel"
                            source="/src/assets/handle-x.svg"
                            alt="cancel-edit"
                            className="form-button"
                            id={`cancel-educ-info-${id}`}                        
                        />
                        <Button 
                            text="Save"
                            source="/src/assets/check-one.svg"
                            alt="save-form"
                            className="form-button"
                            id={`save-educ-info-${id}`}
                            buttonType="submit"                
                        />
                    </div>
                </fieldset>                
            </form>
        </>
        )
}