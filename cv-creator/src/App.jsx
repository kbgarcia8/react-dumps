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

export default function App() {
  /* Main Editing Panels */
  const [openMainPanelIndex, setOpenMainPanelIndex] = useState(null);
  function mainPanelToggle(e) {
    setOpenMainPanelIndex(parseInt(e.target.dataset.index));
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
  const educInfos = cvData.educationalInformations;
  const [educInformations, setEducInformations] = useState(educInfos);
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
    setEditingEducPanel(parseInt(e.target.dataset.index));
  }

  function deleteEducEntry(e) {
    const deletedFormId = parseInt(e.target.closest("form").id);
    const filteredInfo = educInformations.filter(
      (educInformation) => educInformation.id !== deletedFormId
    );
    setEducInformations(filteredInfo);
    localStorage.setItem("savedEducInfos", JSON.stringify(filteredInfo));
  }

  function cancelEditEducEntry() {
    setEditingEducPanel(null);
    const retrievedEducInfos = localStorage.getItem("savedEducInfos") || [];
    let parsedRetrievedData = null;
    retrievedEducInfos == []
      ? (parsedRetrievedData = JSON.parse(retrievedEducInfos))
      : (parsedRetrievedData = educInformations);
    setEducInformations(parsedRetrievedData);
  }

  function saveEditEducEntry(e) {
    e.preventDefault();
    setEditingEducPanel(null);
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
  /* Style Toggling */
  const documentPreviewStyle = {
    fontFamily: "Rubik",
    color: "#FFF",
  };
  const [documentStyle, setDocumentStyle] = useState(documentPreviewStyle);
  /*Miscellenous Functions/Variables*/
  function stopPropagationonChild(e) {
    e.stopPropagation();
  }

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
                    onClickEdit={editEducEntryToggle}
                    isEditing={editingEducPanel === educInformation.id}
                    handleEducInfoChange={processEducInfoChange}
                    EducInfoDeletion={deleteEducEntry}
                    EducInfoCancelEdit={cancelEditEducEntry}
                    EducInfoSaveEdit={saveEditEducEntry}
                  />
                ))}
                <div className="add-educ-info-btn-space">
                  <Button
                    text=""
                    source="assets/plus.svg"
                    alt="add-educ-info"
                    id="add-educ-info-btn"
                    processClick={addEducEntry}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
        <section className="preview-section" style={documentStyle}>
          <div className="personal-info-display">
            <DisplayPersonalInfo props={personalInformations} />
          </div>
          <div className="preview-divider"></div>
          <div className="education-info-display">
            {educInformations.map((educInformation) => (
              <div
                className="educ-entry-display"
                id={`education-info-entry-${educInformation.id}`}
              >
                <p className="education-info-entry-title">
                  {educInformation.universityName}
                </p>
                <p className="education-info-additional-details">
                  <span></span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
