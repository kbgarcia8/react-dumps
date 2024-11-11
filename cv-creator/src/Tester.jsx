import { EditEducInfo } from "./components/EducationalInformations/EditEducInfo.jsx";
import { Button } from "./components/Button.jsx";
import "../src/styles/Tester.css";
import { cvData } from "./components/data";
import { useState, useEffect } from "react";

export default function Tester() {
  const educInfos = cvData.educationalInformations;
  const [educInformations, setEducInformations] = useState(educInfos);
  const [editingEducPanel, setEditingEducPanel] = useState({
    activePanel: null,
    panelVisibilityStyle: {
      display: "none",
      transform: "scaleY(0)",
    },
  });

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

  function deleteEducEntry(e) {
    console.log(`This is the delete button ${e.target.id}`);
    const deletedFormId = parseInt(e.target.closest("form").id);
    setEducInformations(
      educInformations.filter(
        (educInformation) => educInformation.id !== deletedFormId
      )
    );
  }

  function editEducEntryToggle(e) {
    setEditingEducPanel((prevEditingEducPanel) => ({
      ...prevEditingEducPanel,
      ["activePanel"]: parseInt(e.target.dataset.index),
      ["panelVisibilityStyle"]: {
        display:
          prevEditingEducPanel["panelVisibilityStyle"].display === "none"
            ? "block"
            : "none",
        transform:
          prevEditingEducPanel["panelVisibilityStyle"].display === "none"
            ? "scaleY(1)"
            : "scaleY(0)",
        transformOrigin: "top",
        animation:
          prevEditingEducPanel["panelVisibilityStyle"].display === "none"
            ? "expand 500ms ease-in-out 1"
            : "none",
      },
    }));
  }

  //console.log(crypto.randomUUID())
  return (
    <div className="test-container">
      {educInformations.map((educInformation) => (
        <EditEducInfo
          key={educInformation.id}
          props={educInformation}
          onClickEdit={editEducEntryToggle}
          isEditing={editingEducPanel.activePanel === educInformation.id}
          isFormVisible={editingEducPanel.panelVisibilityStyle}
          handleEducInfoChange={processEducInfoChange}
          EducInfoDeletion={deleteEducEntry}
        />
      ))}
      <Button
        text=""
        source="assets/plus.svg"
        alt="add-educ-info"
        id="add-educ-info"
      />
    </div>
  );
}
