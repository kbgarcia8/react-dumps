import { Inputs } from "../Inputs";
import { Button } from "../Button";
import { convertDate } from "../misc";
import "../../styles/WorkExperienceInformations/EditWorkExpInfo.css";

export function EditWorkExpInfo({
  props,
  onClickEditWorkExpInfo,
  isEditingWorkExpInfo = true,
  handleWorkExpInfoChange,
  isPresentToggled,
  addJobTask,
  deleteJobTask,
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
    isPresent,
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
          {isPresent?"Present":!isNaN(new Date(experienceEndDate)) ? convertDate(experienceEndDate) : ""}
        </p>
      </div>
        {isEditingWorkExpInfo && <form id={id} onSubmit={WorkExpInfoSaveEdit} className="workexp-info-form">
          <fieldset>
            <legend></legend>
            <Inputs
              id="company-worked"
              labelText="Company Name"
              placeholderText="Company Worked AT"
              type="text"
              dataKey="companyName"
              value={companyName}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="job-position"
              labelText="Job Title/Position"
              placeholderText="Job Title"
              type="text"
              dataKey="jobPosition"
              value={jobPosition}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="workexp-start-date"
              labelText="From"
              type="month"
              dataKey="experienceStartDate"
              value={experienceStartDate}
              onChange={handleWorkExpInfoChange}
            />
            <Inputs
              id="workexp-end-date"
              labelText="To"
              type="month"
              dataKey="experienceEndDate"
              value={experienceEndDate}
              onChange={handleWorkExpInfoChange}
            />
            <div className="toggle-btn-container">
                <input type="checkbox" id={`toggle-end-date-present-${id}`} onChange={isPresentToggled} data-key="isPresent"/>
                <label htmlFor={`toggle-end-date-present-${id}`} className="toggle-btn"></label>
                <span className="toggle-btn-label">Present</span>
            </div>
            <div className="workexp-jobtasks-space">
              <fieldset>
                <legend>Job Tasks</legend>
                {jobTasks.map((jobTask, index) => (
                  <Inputs
                    key={jobTask}
                    id={`job-task-${id}-${index}`}
                    labelText={`Job Task ${index+1}`}
                    placeholderText="Job Task"
                    type="text"
                    dataKey="jobTasks"
                    dataIndex={index}
                    value={jobTask}
                    onChange={handleWorkExpInfoChange}
                  />
                ))}
                <div className="add-workexp-jobtask-btn-space">
                    <Button
                      text=""
                      source="src/assets/minus.svg"
                      alt="delete-workexp-jobtask"
                      className="delete-workexp-jobtask-btn"
                      id={id}
                      buttonType="button"
                      processClick={deleteJobTask}
                    />
                    <Button
                      text=""
                      source="src/assets/plus.svg"
                      alt="add-workexp-jobtask"
                      className="add-workexp-jobtask-btn"
                      id={id}
                      buttonType="button"
                      processClick={addJobTask}
                    />                  
                  </div>
              </fieldset>
            </div>        
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
