import { Inputs } from "../Inputs";
import { Button } from "../Button";
import { convertDate } from "../misc.js";
import "../../styles/EducationalInformations/EditEducInfo.css";

export function EditEducInfo({
  props,
  onClickEditEducInfo,
  isEditingEducInfo,
  handleEducInfoChange,
  EducInfoDeletion,
  EducInfoCancelEdit,
  EducInfoSaveEdit,
}) {
  const {
    id,
    universityName,
    degreeFinished,
    educationStartDate,
    educationEndDate,
  } = props;
  
  return (
    <>
      <div className="educ-info-entry" id={id}>
        <div className="educ-info-entry-header">
          <span>{universityName}</span>
          <button id="edit-educ-info-btn" onClick={onClickEditEducInfo}>
            <img src="src/assets/edit.svg" alt="edit-entry" data-index={id} />
          </button>
        </div>
        <p>
          {!isNaN(new Date(educationStartDate)) ? convertDate(educationStartDate) : ""}-
          {!isNaN(new Date(educationEndDate)) ? convertDate(educationEndDate) : ""}
        </p>
      </div>
      {isEditingEducInfo && (
        <form id={id} onSubmit={EducInfoSaveEdit} className="educ-info-form">
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
            <div className="educ-entry-buttons-space">
              <Button
                text="Delete"
                source="src/assets/delete.svg"
                alt="delete-form"
                className="educ-entry-button"
                id={`delete-educ-info-${id}`}
                buttonType="button"
                processClick={EducInfoDeletion}
              />
              <Button
                text="Cancel"
                source="src/assets/handle-x.svg"
                alt="cancel-edit"
                className="educ-entry-button"
                id={`cancel-educ-info-${id}`}
                buttonType="button"
                processClick={EducInfoCancelEdit}
              />
              <Button
                text="Save"
                source="src/assets/check-one.svg"
                alt="save-form"
                className="educ-entry-button"
                id={`save-educ-info-${id}`}
                buttonType="submit"
              />
            </div>
          </fieldset>
        </form>
      )}
    </>
  );
}
