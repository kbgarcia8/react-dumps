import "./styles/Tester.css";
import { cvData } from "./components/data";
import { EditWorkExpInfo } from "./components/WorkExperienceInformations/EditWorkExpInfo";
import { useState } from "react";
import { Button } from "./components/Button";

export default function Tester() {  
  const workExperienceData = cvData.workExperiences
  const [workExpInformations, setWorkExpInformations] = useState(workExperienceData);
  const [workExpInformationsBackup, setWorkExpInformationsBackup] = useState(workExperienceData)
  const [editingWorkExpPanel, setEditingWorkExpPanel] = useState(null);

  function processWorkExpInfoChange(e) {    
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key, index: taskIndex } = e.target.dataset;
    console.log(changedFormId,key,taskIndex)
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) => {
        if (workExpInformation.id === changedFormId && key !=="jobTasks" && taskIndex === undefined) {
          return { ...workExpInformation, [key]: e.target.value }
        } else if (workExpInformation.id === changedFormId && key ==="jobTasks" && taskIndex !== undefined) {
          const updatedTasks = [...workExpInformation.jobTasks]
          updatedTasks[parseInt(taskIndex)] = e.target.value
          return {...workExpInformation, jobTasks: updatedTasks}
        } else {
          return workExpInformation
        }
      }));
  }
  function togglePresentCheckbox (e) {
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key } = e.target.dataset;
    const isChecked = e.target.checked;
    const relatedEndDateForm = (e.target.closest('div.toggle-btn-container')).previousSibling
    isChecked ? 
    relatedEndDateForm.style.display = "none"
    : relatedEndDateForm.style.display = "flex"

    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) =>        
        workExpInformation.id === changedFormId && key === "isPresent"
          ? { ...workExpInformation, [key]: isChecked }
          : workExpInformation
      )
    )
    
  }
  function addJobTask(e) {    
    const addTaskBtnId = parseInt(e.target.id) || parseInt(e.target.closest('button').id)
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) =>{
        console.log(workExpInformation.id, addTaskBtnId)
        if (workExpInformation.id === addTaskBtnId) {
          const updatedTasks = [...workExpInformation.jobTasks, ""]
          return {...workExpInformation, jobTasks: updatedTasks}
        } else {
          return workExpInformation
        }
      }
      )
    )
  }
  function deleteLastJobTask(e) {
    const deleteTaskBtnId = parseInt(e.target.id) || parseInt(e.target.closest('button').id)
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) =>{
        console.log(workExpInformation.id, deleteTaskBtnId)
        if (workExpInformation.id === deleteTaskBtnId) {
          const updatedTasks = [...workExpInformation.jobTasks.slice(0,-1)]
          return {...workExpInformation, jobTasks: updatedTasks}
        } else {
          return workExpInformation
        }
      }
      )
    )
  }
  function editWorkExpEntryToggle(e) {
    const activeWorkExpEntry = parseInt(e.target.dataset.index)
    setEditingWorkExpPanel((prevActiveWorkExpEntry) =>
      prevActiveWorkExpEntry === activeWorkExpEntry ? null : activeWorkExpEntry
    );
    setWorkExpInformationsBackup([...workExpInformations]);
  }
  function deleteWorkExpEntry(e) {
    const toDeleteWorkExpEntryFormId = parseInt(e.target.closest("form").id);
    const filteredWorkExpInfo = workExpInformations.filter(
      (workExpInformation) => workExpInformation.id !== toDeleteWorkExpEntryFormId
    );
    setWorkExpInformations(filteredWorkExpInfo);
    localStorage.setItem("savedWorkExpInfos", JSON.stringify(filteredWorkExpInfo));
  }
  function cancelEditWorkExpEntry() {
    setEditingWorkExpPanel(null);
    const retrievedWorkExpInfos = localStorage.getItem("savedWorkExpInfos");
    const parsedWorkExpData =
      JSON.parse(retrievedWorkExpInfos) || workExpInformationsBackup;
      setWorkExpInformations(parsedWorkExpData);
  }
  function saveEditWorkExpEntry(e) {
    e.preventDefault();
    setEditingWorkExpPanel(null);
    setWorkExpInformationsBackup([...workExpInformations]);
    localStorage.setItem("savedWorkExpInfos", JSON.stringify(workExpInformations));
  }
  function addWorkExpEntry() {
    const newWorkExpEntry = {
      id: Date.now(),
      companyName: "",
      jobPosition: "",
      experienceStartDate: "",
      experienceEndDate: "",
      isPresent: false,
      jobTasks: []
    }
    setWorkExpInformations((prevWorkexpInfo) => [
      ...prevWorkexpInfo,
      newWorkExpEntry,
    ]);
    localStorage.setItem("savedWorkExpInfos", JSON.stringify([...workExpInformations, newWorkExpEntry]));
  }
  return (
    <>      
      <div className="test-container">
        {workExpInformations.map((workExpInformation) => (
          <EditWorkExpInfo
              key={workExpInformation.id}
              props={workExpInformation}
              onClickEditWorkExpInfo={editWorkExpEntryToggle}
              isEditingWorkExpInfo={editingWorkExpPanel === workExpInformation.id}
              handleWorkExpInfoChange={processWorkExpInfoChange}
              isPresentToggled={togglePresentCheckbox}
              addJobTask={addJobTask}
              deleteJobTask={deleteLastJobTask}
              WorkExpInfoDeletion={deleteWorkExpEntry}
              WorkExpInfoCancelEdit={cancelEditWorkExpEntry}
              WorkExpInfoSaveEdit={saveEditWorkExpEntry}
          />
        ))}
        <div className="add-educ-info-btn-space">
          <Button
            text=""
            source="src/assets/plus.svg"
            alt="add-workexp-info"
            id="add-workexp-info-btn"
            processClick={addWorkExpEntry}
          />
        </div>
      </div>
    </>
  );
}
