import { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Controls } from "./components/Controls.jsx";
import { EditPersonalInfo } from "./components/PersonalInformations/EditPersonalInfo.jsx";
import { DisplayPersonalInfo } from "./components/PersonalInformations/DisplayPersonalInfo.jsx";

export default function App() {
  //declare functions for logics to be passed to components
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handleInputEmail(e) {
    setInputEmail(e.target.value)
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
                firstName={firstName}
                onChangeFirst={handleFirstName}
                lastName={lastName}
                onChangeLast={handleLastName}
                email={inputEmail}
                onChangeEmail={handleInputEmail}
              />
            </div>
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display">
            <DisplayPersonalInfo 
              lastName={lastName}
              firstName={firstName}
              jobTitle="Software Engineer"
              inputEmail={inputEmail}
            />
          </div>
        </section>
      </div>
    </>
  );
}