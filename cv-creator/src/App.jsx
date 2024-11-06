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
  console.log(cvData.personalInformations)
  const [personalInformations, setFirstName] = useState(cvData.personalInformations);

  function processpersonalInfoChanges(e) {
    const { key } = e.target.dataset.key
    setFirstName(e.target.value)
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
              <EditPersonalInfo
                props={personalInformations}
              />
            </div>
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display">
            <DisplayPersonalInfo
            />
          </div>
        </section>
      </div>
    </>
  );
}