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

  function handleFirstName(e) {
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
                firstName={firstName}
                onChange={handleFirstName}
              />
            </div>
          </div>
        </section>
        <section className="preview-section">
          <div className="personal-info-display">
            <p>{firstName}</p>
            <p>Software Engineer</p>
            <p>mark-stanton@gmail.com</p>
            <p>(+63)000-000-0000</p>
            <p>123 ABC Sample Street, Country 0000</p>
            <p>www.my-url.com</p>
          </div>
        </section>
      </div>
    </>
  );
}