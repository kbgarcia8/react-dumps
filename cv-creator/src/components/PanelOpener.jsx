import "../styles/PanelOpener.css";

export function PanelOpener({ text, onClick, dataIndex }) {
  return (
    <>
      <div className="edit-panel-opener">
        <span>{text}</span>
        <button id="edit-panel-btn" onClick={onClick}>
          <img
            src="src/assets/double-right.svg"
            alt="double-arrow-icon"
            id="edit-panel-btn-img"
            data-index={dataIndex}
          />
        </button>
      </div>
      <div className="edit-panel-divider"></div>
    </>
  );
}
