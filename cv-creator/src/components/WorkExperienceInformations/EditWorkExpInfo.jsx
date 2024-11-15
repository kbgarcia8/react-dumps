import { Inputs } from "../Inputs";
import { Button } from "../Button";
import { convertDate } from "../misc";
import "../../styles/WorkExperienceInformations/EditWorkExpInfo.css";

export function EditWorkExpInfo({
  props,
  onClickEditWorkExpInfo,
  isEditingWorkExpInfo = true,
  handleWorkExpInfoChange,
  isPresentToggled = function togglePresentCheckbox (e){
    console.log(e.target.tagName)
    e.target.checked ? 
    (e.target.closest('div.toggle-btn-container')).previousSibling.style.display = "none"
    : (e.target.closest('div.toggle-btn-container')).previousSibling.style.display = "flex"
  },
  WorkExpInfoDeletion,
  WorkExpInfoCancelEdit,
  WorkExpInfoSaveEdit,
}) {
  const {
    id,
    companyName,
    jobPosition,
    experienceStartDate,
    experienceEndDate,
    jobTasks,

  } = props;
  
  return (
    <>
      <div className="workexp-info-entry" id={id}>
        <div className="workexp-info-entry-header">
          <span>{companyName}</span>
          <button id="edit-workexp-info-btn" onClick={onClickEditWorkExpInfo}>
            <img src="src/assets/edit.svg" alt="edit-entry" data-index={id} />
          </button>
        </div>
        <p>{jobPosition}</p>
        <p>
          {!isNaN(new Date(experienceStartDate)) ? convertDate(experienceStartDate) : ""}-
          {!isNaN(new Date(experienceEndDate)) ? convertDate(experienceEndDate) : ""}
        </p>
      </div>
        {isEditingWorkExpInfo && <form id={id} onSubmit={WorkExpInfoSaveEdit} className="workexp-info-form">
          <fieldset>
            <legend></legend>
            <Inputs
              id="school-attended"
              labelText="University/Institute"
              placeholderText="University Attended"
              type="text"
              dataKey="companyName"
              value={companyName}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="degree"
              labelText="Degree/Major"
              placeholderText="Degree Finished"
              type="text"
              dataKey="jobPosition"
              value={jobPosition}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="education-start-date"
              labelText="Start Date"
              type="month"
              dataKey="experienceStartDate"
              value={experienceStartDate}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="education-end-date"
              labelText="End Date"
              type="month"
              dataKey="experienceEndDate"
              value={experienceEndDate}
              onChange={handleWorkExpInfoChange}
            />
            <div className="toggle-btn-container">
                <input type="checkbox" id={`toggle-end-date-present-${id}`} onChange={isPresentToggled}/>
                <label htmlFor={`toggle-end-date-present-${id}`} className="toggle-btn"></label>
                <span className="toggle-btn-label">Present</span>
            </div>
            {/* CONTINUE TO PUT jobtasks here */} 
            <div className="workexp-entry-buttons-space">
              <Button
                text="Delete"
                source="src/assets/delete.svg"
                alt="delete-form"
                className="workexp-entry-button"
                id={`delete-workexp-info-${id}`}
                buttonType="button"
                processClick={WorkExpInfoDeletion}
              />
              <Button
                text="Cancel"
                source="src/assets/handle-x.svg"
                alt="cancel-edit"
                className="workexp-entry-button"
                id={`cancel-workexp-info-${id}`}
                buttonType="button"
                processClick={WorkExpInfoCancelEdit}
              />
              <Button
                text="Save"
                source="src/assets/check-one.svg"
                alt="save-form"
                className="workexp-entry-button"
                id={`save-workexp-info-${id}`}
                buttonType="submit"
              />
            </div>
          </fieldset>
        </form>}
    </>
  );
}
