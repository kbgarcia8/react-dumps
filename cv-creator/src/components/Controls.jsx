import "../styles/Controls.css"
import { Button } from "./Button.jsx";
import React from 'react';

export function Controls({toggleInformationPanel, sampleDataFill, resetAndClearData, downloadPDF, printPDF}) {
  return (
    <>
      <div className="controls-buttons">
        <Button 
          text="Information"
          source="./src/assets/editor.svg"
          alt="edit-information-icon"
          buttonType="button"
          processClick={toggleInformationPanel}
          dataIndex={0}
        />
        <Button 
          text="Aesthetics"
          source="./src/assets/color-filter.svg"
          alt="edit-aesthetic-icon"
          processClick={toggleInformationPanel}
          dataIndex={1}
        />
        <div className="divider"></div>
        <Button 
          text="Sample Fill"
          source="./src/assets/fill.svg"
          alt="sample-fill-icon"
          processClick={sampleDataFill}
        />
        <Button 
          text="Reset"
          source="./src/assets/clear.svg"
          alt="reset-icon"
          processClick={resetAndClearData}
        />
        <Button 
          text="Download"
          source="./src/assets/download.svg"
          alt="download-icom"
          processClick={downloadPDF}
        />
        <Button 
          text="Print"
          source="./src/assets/printer.svg"
          alt="print-icon"
          processClick={printPDF}
        />
      </div>
    </>
  );
}
