import { useState } from "react";
import "./styles/App.css";
import { cvData } from "./components/data.js";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Controls } from "./components/Controls.jsx";
import { EditPersonalInfo } from "./components/PersonalInformations/EditPersonalInfo.jsx";
import { DisplayPersonalInfo } from "./components/PersonalInformations/DisplayPersonalInfo.jsx";
import { PanelOpener } from "./components/PanelOpener.jsx";

export default function App() {
  /* Variable/Function/States */
  const personalData = cvData.personalInformations;
  const [personalInformations, setPersonalInformations] =
    useState(personalData);

  function processpersonalInfoChanges(e) {
    const { key } = e.target.dataset;
    setPersonalInformations({ ...personalInformations, [key]: e.target.value });
  }

  const formisClosed = {
    display: "none",
    transform: "scaleY(0)",
  };
  const [isOpen, setisOpen] = useState(formisClosed);

  function editInfoToggle() {
    {
      isOpen.display === "none"
        ? setisOpen({
            ...isOpen,
            display: "block",
            transform: "scaleY(1)",
            transformOrigin: "top",
            animation: "expand 500ms ease-in-out 1",
          })
        : setisOpen({
            ...isOpen,
            display: "none",
            transform: "scaleY(0)",
            /*animation: "close 500ms ease-in-out 1",
            //not working need to find a way to overwrite animation,
            // margin-top: -100% to 0% is not advisable*/
          });
    }
    const openBtn = document.getElementById("edit-panel-btn-img");
    openBtn.classList.toggle("rotated");
  }
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
          <div className="edit-information">
            <PanelOpener text="Personal Information" onClick={editInfoToggle} />
            <div id="personal-info-form" style={isOpen}>
              <EditPersonalInfo
                props={personalInformations}
                handleChange={processpersonalInfoChanges}
              />
            </div>
            <PanelOpener text="Educational Background" />
            <div id="educational-info-form"></div>
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display">
            <DisplayPersonalInfo props={personalInformations} />
          </div>
        </section>
      </div>
    </>
  );
}
