import { EditEducInfo } from "./components/EducationalInformations/EditEducInfo.jsx";
import { Button } from "./components/Button.jsx";
import "../src/styles/Tester.css";
import { cvData } from "./components/data";
import { useState } from "react";

export default function Tester() {
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
    console.log(educInformations);
    localStorage.setItem("savedEducInfos", JSON.stringify(filteredInfo));
  }

  function cancelEditEducEntry() {
    setEditingEducPanel(null);
    const retrievedEducInfos = localStorage.getItem("savedEducInfos") || [];
    let parsedRetrievedData = null;
    retrievedEducInfos === []
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
    console.log(educInformations);
  }
  return (
    <div className="test-container">
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
      <Button
        text=""
        source="assets/plus.svg"
        alt="add-educ-info"
        id="add-educ-info"
        processClick={addEducEntry}
      />
    </div>
  );
}
