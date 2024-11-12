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
  const [openIndex, setOpenIndex] = useState(null);

  function panelToggle(e) {
    setOpenIndex(e.target.dataset.index);
    const openBtns = document.querySelectorAll("#edit-panel-btn-img");
    openBtns.forEach((openBtn, index) => {
      if (openBtns[index] == openBtns[e.target.dataset.index]) {
        openBtns[e.target.dataset.index].classList.toggle("rotated");
      } else {
        openBtns[index].classList.remove("rotated");
      }
    });
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
            <PanelOpener
              text="Personal Information"
              onClick={panelToggle}
              dataIndex={0}
            />
            <div id="personal-info-panel">
              <EditPersonalInfo
                props={personalInformations}
                handleChange={processpersonalInfoChanges}
                isShown={openIndex == 0}
                formId="personal-info-panel"
              />
            </div>
            <PanelOpener
              text="Educational Background"
              onClick={panelToggle}
              dataIndex={1}
            />
            <div id="educational-info-panel">Sample Text here</div>
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
