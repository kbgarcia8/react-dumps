import { Inputs } from "./components/Inputs"
import { Button } from "./components/Button"
import "../src/styles/Tester.css"

export default function Tester() {
    return(
        <div className="test-continer">
            <form onSubmit={(e) => e.preventDefault}>
                <fieldset>
                    <legend></legend>
                    <Inputs
                        id="school-attended"
                        labelText="University/Institute"
                        placeholderText="University Attended"
                        type="text"
                        dataKey="universityName"
                    />
                    <Inputs
                        id="degree"
                        labelText="Degree/Major"
                        placeholderText="Degree Finished"
                        type="text"
                        dataKey="degreeFinished"
                    />
                    <Inputs
                        id="education-start-date"
                        labelText="Start Date"
                        type="date"
                        dataKey="educationStartDate"
                    />
                    <Inputs
                        id="education-end-date"
                        labelText="End Date"
                        type="date"
                        dataKey="educationEndDate"
                    />
                    <div className="new-form-buttons-space">
                        <Button 
                            text="Delete"
                            source="/src/assets/delete.svg"
                            alt="delete-form"
                            className="form-button"
                            id="delete-educ-info"                        
                        />
                        <Button 
                            text="Cancel"
                            source="/src/assets/handle-x.svg"
                            alt="cancel-edit"
                            className="form-button"
                            id="cancel-edit-educ-info"                        
                        />
                        <Button 
                            text="Save"
                            source="/src/assets/check-one.svg"
                            alt="delete-form"
                            className="form-button"
                            id="delete-educ-info"
                            buttonType="submit"                
                        />
                    </div>
                </fieldset>                
            </form>
            <Button 
                    text=""
                    source="/src/assets/plus.svg"
                    alt="add-educ-info"
                    id="add-educ-info"
                />
        </div>
    )
}