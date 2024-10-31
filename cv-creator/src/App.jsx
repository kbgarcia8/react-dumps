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
                  <label htmlFor="title">Job/Professional Title:</label>
                  <input type="text" id="title" name="title"></input>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                  <label htmlFor="contact-number">Contact Number:</label>
                  <input type="number" id="contact-number" name="contact-number"/>
                  <label htmlFor="address">Address:</label>
                  <input type="text" id="address" name="address" />
                  <label htmlFor="website">Website:</label>
                  <input type="url" id="website" name="website" />
                  <label htmlFor="summary">Summary:</label>
                  <textarea name="sumamary" id="summary"></textarea>
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
