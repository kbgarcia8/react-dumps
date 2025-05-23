import "./styles/App.css";
import React from 'react';
import { useState } from "react";
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
import { EditTechSkillsInfo } from "./components/TechnicalSkillsInformations/EditTechSkillsInfo.jsx";
import { DisplayTechInfo } from "./components/TechnicalSkillsInformations/DisplayTechInfo.jsx";
import { AestheticChanger } from "./components/AestheticChanger/AestheticChanger.jsx";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function App() {
  /* Main Editing Panels */
  const [openMainPanelIndex, setOpenMainPanelIndex] = useState(null);
  function editInfoPanelToggle(e) {
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
    const activeEducEntry = parseInt(e.target.dataset.index);
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
  const workExperienceData = cvData.workExperiences;
  const [workExpInformations, setWorkExpInformations] =
    useState(workExperienceData);
  const [workExpInformationsBackup, setWorkExpInformationsBackup] =
    useState(workExperienceData);
  const [editingWorkExpPanel, setEditingWorkExpPanel] = useState(null);

  function processWorkExpInfoChange(e) {
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key, index: taskIndex } = e.target.dataset;
    console.log(changedFormId, key, taskIndex);
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) => {
        if (
          workExpInformation.id === changedFormId &&
          key !== "jobTasks" &&
          taskIndex === undefined
        ) {
          return { ...workExpInformation, [key]: e.target.value };
        } else if (
          workExpInformation.id === changedFormId &&
          key === "jobTasks" &&
          taskIndex !== undefined
        ) {
          const updatedTasks = [...workExpInformation.jobTasks];
          updatedTasks[parseInt(taskIndex)] = e.target.value;
          return { ...workExpInformation, jobTasks: updatedTasks };
        } else {
          return workExpInformation;
        }
      })
    );
  }
  function togglePresentCheckbox(e) {
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key } = e.target.dataset;
    const isChecked = e.target.checked;
    const relatedEndDateForm = e.target.closest(
      "div.toggle-btn-container"
    ).previousSibling;
    isChecked
      ? (relatedEndDateForm.style.display = "none")
      : (relatedEndDateForm.style.display = "flex");

    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) =>
        workExpInformation.id === changedFormId && key === "isPresent"
          ? { ...workExpInformation, [key]: isChecked }
          : workExpInformation
      )
    );
  }
  function addJobTask(e) {
    const addTaskBtnId =
      parseInt(e.target.id) || parseInt(e.target.closest("button").id);
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) => {
        console.log(workExpInformation.id, addTaskBtnId);
        if (workExpInformation.id === addTaskBtnId) {
          const updatedTasks = [...workExpInformation.jobTasks, ""];
          return { ...workExpInformation, jobTasks: updatedTasks };
        } else {
          return workExpInformation;
        }
      })
    );
  }
  function deleteLastJobTask(e) {
    const deleteTaskBtnId =
      parseInt(e.target.id) || parseInt(e.target.closest("button").id);
    setWorkExpInformations((prevWorkexpInfo) =>
      prevWorkexpInfo.map((workExpInformation) => {
        console.log(workExpInformation.id, deleteTaskBtnId);
        if (workExpInformation.id === deleteTaskBtnId) {
          const updatedTasks = [...workExpInformation.jobTasks.slice(0, -1)];
          return { ...workExpInformation, jobTasks: updatedTasks };
        } else {
          return workExpInformation;
        }
      })
    );
  }
  function editWorkExpEntryToggle(e) {
    const activeWorkExpEntry = parseInt(e.target.dataset.index);
    setEditingWorkExpPanel((prevActiveWorkExpEntry) =>
      prevActiveWorkExpEntry === activeWorkExpEntry ? null : activeWorkExpEntry
    );
    setWorkExpInformationsBackup([...workExpInformations]);
  }
  function deleteWorkExpEntry(e) {
    const toDeleteWorkExpEntryFormId = parseInt(e.target.closest("form").id);
    const filteredWorkExpInfo = workExpInformations.filter(
      (workExpInformation) =>
        workExpInformation.id !== toDeleteWorkExpEntryFormId
    );
    setWorkExpInformations(filteredWorkExpInfo);
    localStorage.setItem(
      "savedWorkExpInfos",
      JSON.stringify(filteredWorkExpInfo)
    );
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
    localStorage.setItem(
      "savedWorkExpInfos",
      JSON.stringify(workExpInformations)
    );
  }
  function addWorkExpEntry() {
    const newWorkExpEntry = {
      id: Date.now(),
      companyName: "",
      jobPosition: "",
      experienceStartDate: "",
      experienceEndDate: "",
      isPresent: false,
      jobTasks: [""],
    };
    setWorkExpInformations((prevWorkexpInfo) => [
      ...prevWorkexpInfo,
      newWorkExpEntry,
    ]);
    localStorage.setItem(
      "savedWorkExpInfos",
      JSON.stringify([...workExpInformations, newWorkExpEntry])
    );
  }
  /* Technical Skills Section */
  const techSkillsData = cvData.techSkills;
  const [techSkillsInformations, setTechSkillsInformations] =
    useState(techSkillsData);
  const [techSkillsBackup, setTechSkillsInformationsBackup] =
    useState(techSkillsData);
    
  function processTechSkillsInfoChange(e) {
    const { key: techSkillIndex } = e.target.dataset;
    if (e.target.closest("form").id === "techskills-info-form") {
      setTechSkillsInformations((prevTechSkills) =>
        prevTechSkills.map((prevTechSkill, index) =>
          index === parseInt(techSkillIndex) ? e.target.value : prevTechSkill
        )
      );
    }
  }
  function addTechSkill(e) {
    e.target.closest("form").id === "techskills-info-form" && setTechSkillsInformations((prevTechSkills) => [...prevTechSkills, ""]);
    localStorage.setItem(
      "savedTechSkillsInfos",
      JSON.stringify(techSkillsInformations)
    );
  }
  function deleteTechSkill(e) {
    e.target.closest("form").id === "techskills-info-form" && setTechSkillsInformations((prevTechSkills) => [...prevTechSkills.slice(0,-1)]);
    localStorage.setItem(
      "savedTechSkillsInfos",
      JSON.stringify(techSkillsInformations)
    );
  }
  function cancelEditTechSkillsEntry() {
    const arrowBtns = document.querySelectorAll("#edit-panel-btn-img")
    arrowBtns[3].classList.toggle('rotated')
    setOpenMainPanelIndex(null);
    const retrievedTechSkillsInfo = localStorage.getItem("savedTechSkillsInfos");
    const parsedTechSkillsData =
      JSON.parse(retrievedTechSkillsInfo) || techSkillsBackup;
      setTechSkillsInformations(parsedTechSkillsData);
  }
  function saveEditTechSkillsEntry(e) {    
    e.preventDefault();
    const arrowBtns = document.querySelectorAll("#edit-panel-btn-img")
    arrowBtns[3].classList.toggle('rotated')
    setOpenMainPanelIndex(null);
    setTechSkillsInformationsBackup([...techSkillsInformations])
    localStorage.setItem(
      "savedTechSkillsInfos",
      JSON.stringify(techSkillsInformations)
    );
  }
  /* Control Button Functions */
  const [editPanelCategory, setEditPanelCategory] = useState(0)
  
  function togglePanelCategory(e){
    const {index} = e.currentTarget.dataset
    setEditPanelCategory(parseInt(index))
  }
  function sampleDataFill(){
    setPersonalInformations(cvData.personalInformations)
    setEducInformations(cvData.educationalInformations)
    setWorkExpInformations(cvData.workExperiences)
    setTechSkillsInformations(cvData.techSkills)
  }
  function resetAndClearData(){
    setPersonalInformations('')
    setEducInformations([])
    setWorkExpInformations([])
    setTechSkillsInformations([])
    localStorage.clear();
  }
  async function downloadPDF() {
    try {
        const element = document.querySelector(".preview-section");
        element.style.boxShadow = "none";
        element.style.filter = "none";
        if (!element) {
            console.error("Element not found!");
            return;
        }

        // Generate canvas
        const canvas = await html2canvas(element, {
            scale: 1, // Use lower scale to avoid memory issues
            useCORS: true,
        });

        const base64image = canvas.toDataURL("image/png");
        if (!base64image) {
            console.error("Failed to generate base64 image");
            return;
        }

        // Set up jsPDF
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        const pageWidth = 210;
        const pageHeight = 297;
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        if (imgHeight > pageHeight) {
            pdf.addImage(base64image, "PNG", 0, 0, imgWidth, pageHeight);
        } else {
            const verticalOffset = (pageHeight - imgHeight) / 2;
            pdf.addImage(base64image, "PNG", 0, verticalOffset, imgWidth, imgHeight);
        }

        pdf.save("resume.pdf");
        console.log("Resume downloaded successfully");
    } catch (error) {
        console.error("Error generating the PDF:", error);
    }
  }
  async function printPDF() {
    alert("Feature still in progress, Coming soon!")
    /*try {
        const element = document.querySelector(".preview-section");
        if (!element) {
            console.error("Element not found!");
            return;
        }

        // Generate canvas with A4 aspect ratio
        const canvas = await html2canvas(element, {
            scale: 2, // High quality
            useCORS: true,
            backgroundColor: null, // Transparent background
        });

        const base64image = canvas.toDataURL("image/png");

        // A4 dimensions in pixels at 96 DPI
        const A4_WIDTH_PX = 794; // 210mm
        const A4_HEIGHT_PX = 1123; // 297mm

        const imgWidth = A4_WIDTH_PX;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Create an iframe for printing
        const iframe = document.createElement("iframe");
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.zIndex = "-1"; // Hide from view

        document.body.appendChild(iframe);

        // Write the image into the iframe with correct print styles
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(`
            <html>
                <head>
                    <title>Print Resume</title>
                    <style>
                        @page {
                            size: A4;
                            margin: 0;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            background-color: white;
                        }
                        img {
                            width: ${imgWidth}px;
                            height: ${imgHeight}px;
                            display: block;
                        }
                    </style>
                </head>
                <body>
                    <img src="${base64image}" alt="Resume Preview" />
                </body>
            </html>
        `);
        doc.close();

        // Trigger print once iframe is loaded
        iframe.onload = () => {
            iframe.contentWindow.print();

            setTimeout(() => {
                document.body.removeChild(iframe);
            }, 1000);
        };
    } catch (error) {
        console.error("Error triggering print:", error);
    }*/
  }
  /* Style Toggling */
  function editAestheticPanelToggle(){
    console.log('toggle aesthetic panels')
  }
  const previewPersonalInfoStyle = {
    fontFamily: "Rubik",
    color: "#FFFFFF",
    backgroundColor: "#133E87"
  };
  const previewSectionHeaderStyle = {
    fontFamily: "Rubik",
    fontWeight: 900,
    //fontSize: `1.25vmax`, need to decide first if rem will be implemented
    textDecoration: "underline",
  }
  const previewEntriesStyle = {
    fontFamily: "Rubik",
    //fontSize: `1.25vmax`, need to decide first if rem will be implemented also how to implement different font size per p or div
  }
  const [personalInfoStyle, setPersonalInfoStyle] = useState(previewPersonalInfoStyle);
  const [sectionHeaderStyle, setSectionHeaderStyle] = useState(previewSectionHeaderStyle);
  const [entriesStyle, setEntriesStyle] = useState(previewEntriesStyle);

  function processPersonalInfoStyleChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfoStyle({ ...personalInfoStyle, [key]: e.target.value });
  }
  function processSectionHeaderStyle(e) {
    const { key } = e.target.dataset;
    setSectionHeaderStyle({ ...sectionHeaderStyle, [key]: e.target.value });
  }
  function processSectionDetailsStyle(e) {
    const { key } = e.target.dataset;
    setEntriesStyle({ ...entriesStyle, [key]: e.target.value });
  }
  return (
    <>
      <Header />
      <div className="main">
        <section className="controls-section">
          <WebsiteInfo />
          <Controls 
            toggleInformationPanel={togglePanelCategory}
            sampleDataFill={sampleDataFill}
            resetAndClearData={resetAndClearData}
            downloadPDF={downloadPDF}
            printPDF={printPDF}
          />
        </section>
        <section className="edit-section">
          <div className="edit-information-panels">
          {editPanelCategory === 0 && (
            <>
              <PanelOpener
                text="Personal Information"
                onClick={editInfoPanelToggle}
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
                onClick={editInfoPanelToggle}
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
                      source="/src/assets/plus.svg"
                      alt="add-educ-info"
                      id="add-educ-info-btn"
                      processClick={addEducEntry}
                    />
                  </div>
                </div>
              )}
              <PanelOpener
                text="Work Experience"
                onClick={editInfoPanelToggle}
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
                      source="/src/assets/plus.svg"
                      alt="add-workexp"
                      id="add-workexp-btn"
                      processClick={addWorkExpEntry}
                    />
                  </div>
                </div>
              )}
              <PanelOpener
                text="Technical Skills"
                onClick={(e) => {
                  editInfoPanelToggle(e);
                  setTechSkillsInformationsBackup([...techSkillsInformations]);
                }}
                dataIndex={3}
              />
              {openMainPanelIndex === 3 && (
                <div id="techskills-info-panel">
                  <EditTechSkillsInfo
                    techSkills={techSkillsInformations}
                    handleTechSkillsInfoChange={processTechSkillsInfoChange}
                    addTechSkill={addTechSkill}
                    deleteTechSkill={deleteTechSkill}
                    TechSkillsInfoCancelEdit={cancelEditTechSkillsEntry}
                    TechSkillsInfoSaveEdit={saveEditTechSkillsEntry}
                  />
                </div>
              )}
            </>
          )}
          {editPanelCategory === 1 && (
            <>
              <PanelOpener
                text="Document Design"
                onClick={editAestheticPanelToggle}
                dataIndex={0}
              />
              <AestheticChanger
                personalInfoStyle={personalInfoStyle}
                processPersonalInfoStyleChange={processPersonalInfoStyleChange}
                sectionHeaderStyle={sectionHeaderStyle}
                processSectionHeaderStyle={processSectionHeaderStyle}
                entriesStyle={entriesStyle}
                processSectionDetailsStyle={processSectionDetailsStyle}
              />
            </>
          )}
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display-space" style={personalInfoStyle}>
            <DisplayPersonalInfo props={personalInformations} />
          </div>
          <div className="preview-divider"></div>
          {Object.keys(educInformations).length !== 0 && (
            <div className="education-display-space">
              <p id="education-display-header" style={sectionHeaderStyle}>Education</p>            
              <div className="education-info-entries" style={entriesStyle}>
                {Object.keys(educInformations).length !== 0 &&
                  educInformations.map((educInformation) => (
                    educInformation.universityName !== "" && 
                    <DisplayEducInfo
                      key={educInformation.id}
                      props={educInformation}
                    />
                  ))}
              </div>
            </div>
          )}
          {Object.keys(workExpInformations).length !== 0 && (
            <div className="workexp-display-space">            
              <p id="workexp-display-header" style={sectionHeaderStyle}>Work Experience</p>            
              <div className="workexp-info-entries" style={entriesStyle}>
                  {workExpInformations.map((workExpInformation) => (
                    workExpInformation.companyName !== "" && 
                    <DisplayWorkExpInfo
                      key={workExpInformation.id}
                      props={workExpInformation}
                    />
                  ))}
              </div>
            </div>
          )}
          {techSkillsInformations.length !== 0 && (
            <div className="techskills-display-space">
              <p id="techskills-display-header" style={sectionHeaderStyle}>Technical Skills</p>
              <div className="techskills-info-entries" style={entriesStyle}>
                <ul className="techskills-list">
                    {techSkillsInformations.map((techSkillsInformation,index) => (
                      <DisplayTechInfo
                        key={`techskill-display-${index}`}
                        props={{techSkillsInformation,index}}
                      />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
