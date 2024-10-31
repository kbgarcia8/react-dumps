import { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Controls } from "./components/Controls.jsx";

export default function App() {
  //declare functions for logics to be passed to components
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
            <div className="personal-info">
              <form action="">
                <fieldset>
                  <legend>Personal Information</legend>
                  <label htmlFor="first-name">First name:</label>
                  <input type="text" id="first-name" name="first-name"></input>
                  <label htmlFor="last-name">Last name:</label>
                  <input type="text" id="last-name" name="last-name"></input>                  
                </fieldset>
              </form>
            </div>
          </div>
        </section>
        <section className="preview-section">
          Dummy Content. Preview side coming soon
        </section>
      </div>
    </>
  );
}
