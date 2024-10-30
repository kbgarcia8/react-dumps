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
            
          </div>
        </section>
        <section className="preview-section">
          Dummy Content. Preview side coming soon
        </section>
      </div>
    </>
  );
}
