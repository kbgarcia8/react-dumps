import { useState } from "react";
import "./styles/App.css";
import { cvData } from "./components/data.js";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Controls } from "./components/Controls.jsx";
import { EditPersonalInfo } from "./components/PersonalInformations/EditPersonalInfo.jsx";
import { DisplayPersonalInfo } from "./components/PersonalInformations/DisplayPersonalInfo.jsx";

export default function App() {
  //declare functions for logics to be passed to components
  const personalData = cvData.personalInformations;
  const [personalInformations, setPersonalInformations] =
    useState(personalData);

  function processpersonalInfoChanges(e) {
    const { key } = e.target.dataset;

    setPersonalInformations({ ...personalInformations, [key]: e.target.value });
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
            <div className="edit-personal-info">
              <div className="edit-panel-opener">
                <span>Personal Information</span>
                <button>
                  <img
                    src="/src/assets/double-arrow.svg"
                    alt="double-arrow-icon"
                  />
                </button>
                <div className="edit-panel-divider"></div>
              </div>
              <EditPersonalInfo
                props={personalInformations}
                handleChange={processpersonalInfoChanges}
              />
            </div>
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
