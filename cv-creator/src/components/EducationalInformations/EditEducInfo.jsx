import { Inputs } from "../Inputs";
import { Button } from "../Button";
import "../../styles/EducationalInformations/EditEducInfo.css";

export function EditEducInfo({
  props,
  onClickEdit,
  isEditing,
  isFormVisible,
  handleEducInfoChange,
  EducInfoDeletion,
  EducInfoCancelEdit,
  handleEducInfoSubmit,
}) {
  const {
    id,
    universityName,
    degreeFinished,
    educationStartDate,
    educationEndDate,
  } = props;
  console.log(isEditing);
  return (
    <>
      <div className="educ-info-entry" id={id}>
        <div className="educ-info-entry-header">
          <span>{universityName}</span>
          <button id="edit-educ-info-btn" onClick={onClickEdit}>
            <img src="assets/edit.svg" alt="edit-entry" data-index={id} />
          </button>
        </div>
        <p>
          {educationStartDate}-{educationEndDate}
        </p>
      </div>
      <form id={id} onSubmit={(e) => e.preventDefault} style={isFormVisible}>
        {isEditing && (
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
                source="assets/delete.svg"
                alt="delete-form"
                className="form-button"
                id={`delete-educ-info-${id}`}
                buttonType="button"
                processClick={EducInfoDeletion}
              />
              <Button
                text="Cancel"
                source="assets/handle-x.svg"
                alt="cancel-edit"
                className="form-button"
                id={`cancel-educ-info-${id}`}
                buttonType="button"
                processClick={EducInfoCancelEdit}
              />
              <Button
                text="Save"
                source="assets/check-one.svg"
                alt="save-form"
                className="form-button"
                id={`save-educ-info-${id}`}
                buttonType="submit"
              />
            </div>
          </fieldset>
        )}
      </form>
    </>
  );
}
