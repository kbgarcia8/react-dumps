import { EditEducInfo } from "./components/EducationalInformations/EditEducInfo.jsx";
import { Button } from "./components/Button.jsx";
import "../src/styles/Tester.css";
import { cvData } from "./components/data";
import { useState, useEffect } from "react";

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
  setEducInformations(
    educInformations.filter(
      (educInformation) => educInformation.id !== deletedFormId
    )
    );
    localStorage.setItem('savedEducInfos', JSON.stringify(educInformations))
}

function cancelEditEducEntry() {
    setEditingEducPanel(null)
    const retrievedEducInfos = localStorage.getItem('savedEducInfos') || []
    const parsedRetrievedData = JSON.parse(retrievedEducInfos)
    setEducInformations(parsedRetrievedData)
}

function saveEditEducEntry(e) {
    e.preventDefault()
    setEditingEducPanel(null)
    localStorage.setItem('savedEducInfos', JSON.stringify(educInformations))
}

function addEducEntry() {
    console.log('entry has been added')
}

  //console.log(crypto.randomUUID())
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
        source="/src/assets/plus.svg"
        alt="add-educ-info"
        id="add-educ-info"
        processClick={addEducEntry}
      />
    </div>
  );
}
