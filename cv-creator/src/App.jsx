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
    setEditingEducPanel(parseInt(e.target.dataset.index));
    setEducInformationsBackup([...educInformations]);
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
    const retrievedEducInfos = localStorage.getItem("savedEducInfos");
    const parsedRetrievedData =
      JSON.parse(retrievedEducInfos) || educInformationsBackup;
    setEducInformations(parsedRetrievedData);
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
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display" style={documentStyle}>
            <DisplayPersonalInfo props={personalInformations} />
          </div>
          <div className="preview-divider"></div>
          {Object.keys(educInformations).length !== 0 && (
            <p id="education-display-header">Education</p>
          )}
          <div className="education-info-display">
            {Object.keys(educInformations).length !== 0 &&
              educInformations.map((educInformation) => (
                <DisplayEducInfo
                  key={educInformation.id}
                  props={educInformation}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
