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

  const formVisibilityStyle = {
    display: "none",
    transform: "scaleY(0)",
  };
  const [isFormVisible, setIsFormVisible] = useState(formVisibilityStyle);
  const [openIndex, setOpenIndex] = useState(0)  

  function editInfoToggle(e) {
    setOpenIndex(e.target.dataset.index)
    const openBtns = document.querySelectorAll("#edit-panel-btn-img");
    openBtns.forEach((openBtn,index) => {
      if(openBtns[index]==openBtns[e.target.dataset.index]) {
        openBtns[e.target.dataset.index].classList.toggle("rotated");                
      } else {
        openBtns[index].classList.remove("rotated")
      }
    })
    {
      isFormVisible.display === "none"
        ? setIsFormVisible({
            ...isFormVisible,
            display: "block",
            transform: "scaleY(1)",
            transformOrigin: "top",
            animation: "expand 500ms ease-in-out 1",
          })
        : setIsFormVisible({
            ...isFormVisible,
            display: "none",
            transform: "scaleY(0)",
            /*animation: "close 500ms ease-in-out 1",
            //not working need to find a way to overwrite animation,
            // margin-top: -100% to 0% is not advisable*/
          });
    }
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
              onClick={editInfoToggle}
              dataIndex={0}
            />
            <div id="personal-info-form" style={isFormVisible}>
              <EditPersonalInfo
                props={personalInformations}
                handleChange={processpersonalInfoChanges}
                isShown={openIndex == 0}
              />
            </div>
            <PanelOpener
              text="Educational Background"
              onClick={editInfoToggle}
              dataIndex={1}
            />
            <div id="educational-info-form" style={isFormVisible}>
              
            </div>
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display">
            <DisplayPersonalInfo
              props={personalInformations}
            />
          </div>
        </section>
      </div>
    </>
  );
}
