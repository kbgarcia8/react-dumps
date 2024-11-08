import "../styles/PanelOpener.css";

export function PanelOpener({ text, onClick }) {
  return (
    <>
      <div className="edit-panel-opener">
        <span>{text}</span>
        <button id="edit-panel-btn" onClick={onClick}>
          <img
            src="assets/double-right.svg"
            alt="double-arrow-icon"
            id="edit-panel-btn-img"
          />
        </button>
      </div>
      <div className="edit-panel-divider"></div>
    </>
  );
}
