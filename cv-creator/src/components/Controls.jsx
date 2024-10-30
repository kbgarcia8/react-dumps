import "../styles/Controls.css"
import { Button } from "./Button.jsx";

export function Controls() {
  return (
    <>
      <div className="controls-buttons">
        <Button 
          text="Information"
          source="/src/assets/editor.svg"
          alt="edit-information-icon"
        />
        <Button 
          text="Aesthetics"
          source="/src/assets/color-filter.svg"
          alt="edit-aesthetic-icon"
        />
        <div className="divider"></div>
        <Button 
          text="Sample Fill"
          source="/src/assets/fill.svg"
          alt="sample-fill-icon"
        />
        <Button 
          text="Reset"
          source="/src/assets/clear.svg"
          alt="reset-icon"
        />
        <Button 
          text="Download"
          source="/src/assets/download.svg"
          alt="download-icom"
        />
        <Button 
          text="Print"
          source="/src/assets/printer.svg"
          alt="print-icon"
        />
      </div>
    </>
  );
}
