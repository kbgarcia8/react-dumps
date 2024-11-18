import { useState } from "react";
import "./styles/App.css";
import { cvData } from "./components/data.js";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Button } from "./components/Button.jsx";
import { Controls } from "./components/Controls.jsx";
import { EditPersonalInfo } from "./components/PersonalInformations/EditPersonalInfo.jsx";
import { DisplayPersonalInfo } from "./components/PersonalInformations/DisplayPersonalInfo.jsx";
import { PanelOpener } from "./components/PanelOpener.jsx";
import { EditEducInfo } from "./components/EducationalInformations/EditEducInfo.jsx";
import { DisplayEducInfo } from "./components/EducationalInformations/DisplayEducInfo.jsx";
import { EditWorkExpInfo } from "./components/WorkExperienceInformations/EditWorkExpInfo.jsx";
import { DisplayWorkExpInfo } from "./components/WorkExperienceInformations/DisplayWorkExpInfo.jsx";

export default function App() {
  /* Main Editing Panels */
  const [openMainPanelIndex, setOpenMainPanelIndex] = useState(null);
  function mainPanelToggle(e) {
    const activeIndex = parseInt(e.target.dataset.index);
    setOpenMainPanelIndex((prevIndex) =>
      prevIndex === activeIndex ? null : activeIndex
    );
    const openMainPanelBtns = document.querySelectorAll("#edit-panel-btn-img");
    openMainPanelBtns.forEach((openMainPanelBtn, index) => {
      if (
        openMainPanelBtns[index] == openMainPanelBtns[e.target.dataset.index]
      ) {
        openMainPanelBtns[e.target.dataset.index].classList.toggle("rotated");
      } else {
        openMainPanelBtns[index].classList.remove("rotated");
      }
    });
  }
  /*Personal Information Section*/
  const personalData = cvData.personalInformations;
  const [personalInformations, setPersonalInformations] =
    useState(personalData);
  function processPersonalInfoChanges(e) {
    const { key } = e.target.dataset;
    setPersonalInformations({ ...personalInformations, [key]: e.target.value });
  }
  /*Educational Background Section*/
  const educBackgroundData = cvData.educationalInformations;
  const [educInformations, setEducInformations] = useState(educBackgroundData);
  const [educInformationsBackup, setEducInformationsBackup] =
    useState(educBackgroundData);
  const [editingEducPanel, setEditingEducPanel] = useState(null);

  function processEducInfoChange(e) {
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key } = e.target.dataset;
    setEducInformations((prevEducInfos) =>
      prevEducInfos.map((educInformation) =>
        educInformation.id === changedFormId
          ? { ...educInformation, [key]: e.target.value }
          : educInformation
      )
    );
  }
  function editEducEntryToggle(e) {
    const activeEducEntry = parseInt(e.target.dataset.index)
    setEditingEducPanel((prevActiveEducEntry) =>
      prevActiveEducEntry === activeEducEntry ? null : activeEducEntry
    );
    setEducInformationsBackup([...educInformations]);
  }
  function deleteEducEntry(e) {
    const toDeleteEducEntryFormId = parseInt(e.target.closest("form").id);
    const filteredEducInfo = educInformations.filter(
      (educInformation) => educInformation.id !== toDeleteEducEntryFormId
    );
    setEducInformations(filteredEducInfo);
    localStorage.setItem("savedEducInfos", JSON.stringify(filteredEducInfo));
  }
  function cancelEditEducEntry() {
    setEditingEducPanel(null);
    const retrievedEducInfos = localStorage.getItem("savedEducInfos");
    const parsedEducData =
      JSON.parse(retrievedEducInfos) || educInformationsBackup;
    setEducInformations(parsedEducData);
  }
  function saveEditEducEntry(e) {
    e.preventDefault();
    setEditingEducPanel(null);
    setEducInformationsBackup([...educInformations]);
    localStorage.setItem("savedEducInfos", JSON.stringify(educInformations));
  }
  function addEducEntry() {
    const newEducInfoEntry = {
      id: Date.now(),
      universityName: "",
      degreeFinished: "",
      educationStartDate: "",
      educationEndDate: "",
    };
    setEducInformations((prevEducInformations) => [
      ...prevEducInformations,
      newEducInfoEntry,
    ]);
    localStorage.setItem(
      "savedEducInfos",
      JSON.stringify([...educInformations, newEducInfoEntry])
    );
  }
  /*Work Experience Section*/
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
  /* Style Toggling */
  const documentPreviewStyle = {
    fontFamily: "Rubik",
    color: "#FFF",
  };
  const [documentStyle, setDocumentStyle] = useState(documentPreviewStyle);
  return (
    <>
      <Header />
      <div className="main">
        <section className="controls-section">
          <WebsiteInfo />
          <Controls />
        </section>
        <section className="edit-section">
          <div className="edit-information-panels">
            <PanelOpener
              text="Personal Information"
              onClick={mainPanelToggle}
              dataIndex={0}
            />
            {openMainPanelIndex === 0 && (
              <div id="personal-info-panel">
                <EditPersonalInfo
                  props={personalInformations}
                  handlePersonalInfoChange={processPersonalInfoChanges}
                  isPanelShown={openMainPanelIndex === 0}
                  formId="personal-info-panel"
                />
              </div>
            )}
            <PanelOpener
              text="Educational Background"
              onClick={mainPanelToggle}
              dataIndex={1}
            />
            {openMainPanelIndex === 1 && (
              <div id="educational-info-panel">
                {educInformations.map((educInformation) => (
                  <EditEducInfo
                    key={educInformation.id}
                    props={educInformation}
                    onClickEditEducInfo={editEducEntryToggle}
                    isEditingEducInfo={editingEducPanel === educInformation.id}
                    handleEducInfoChange={processEducInfoChange}
                    EducInfoDeletion={deleteEducEntry}
                    EducInfoCancelEdit={cancelEditEducEntry}
                    EducInfoSaveEdit={saveEditEducEntry}
                  />
                ))}
                <div className="add-educ-info-btn-space">
                  <Button
                    text=""
                    source="src/assets/plus.svg"
                    alt="add-educ-info"
                    id="add-educ-info-btn"
                    processClick={addEducEntry}
                  />
                </div>
              </div>
            )}
            <PanelOpener
              text="Work Experience"
              onClick={mainPanelToggle}
              dataIndex={2}
            />
            {openMainPanelIndex === 2 && (
              <div id="workexp-info-panel">
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
                <div className="add-workexp-btn-space">
                  <Button
                    text=""
                    source="src/assets/plus.svg"
                    alt="add-workexp"
                    id="add-workexp-btn"
                    processClick={addWorkExpEntry}
                  />
                </div>
              </div>
            )}
            <PanelOpener
              text="Skills"
              onClick={mainPanelToggle}
              dataIndex={3}
            />
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display-space" style={documentStyle}>
            <DisplayPersonalInfo props={personalInformations} />
          </div>
          <div className="preview-divider"></div>
          <div className="education-display-space">
            {Object.keys(educInformations).length !== 0 && (
              <p id="education-display-header">Education</p>
            )}
            <div className="education-info-entries">
              {Object.keys(educInformations).length !== 0 &&
                educInformations.map((educInformation) => (
                  <DisplayEducInfo
                    key={educInformation.id}
                    props={educInformation}
                  />
                ))}
            </div>
          </div>
          <div className="workexp-display-space">
            {Object.keys(workExpInformations).length !== 0 && (
              <p id="workexp-display-header">Work Experience</p>
            )}
            <div className="workexp-info-entries">
              {Object.keys(workExpInformations).length !== 0 &&
                workExpInformations.map((workExpInformation) => (
                  <DisplayWorkExpInfo
                    key={workExpInformation.id}
                    props={workExpInformation}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
