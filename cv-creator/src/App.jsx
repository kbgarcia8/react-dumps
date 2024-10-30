import { useState } from "react";
import "./styles/App.css";
import { Header } from "./components/Header.jsx";
import { WebsiteInfo } from "./components/WebsiteInfo.jsx";
import { Button } from "./components/Button.jsx";

export default function App() {
  return (
    <>
      <Header />
      <div className="main">
        <section className="controls-section">
          <WebsiteInfo />
          <div className="edit-buttons">
            <Button />
          </div>
        </section>
        <section className="preview-section">
          Dummy Content. Preview side is here coming soon
        </section>
      </div>
    </>
  );
}
