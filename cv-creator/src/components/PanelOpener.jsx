import "../styles/PanelOpener.css";

export function PanelOpener({text}) {
  return (
    <>
    <div className="edit-panel-opener">
        <span>{text}</span>
        <button className="edit-panel-btn">
            <img                    
                src="/src/assets/double-right.svg"
                alt="double-arrow-icon"
            />
        </button>        
    </div>
    <div className="edit-panel-divider"></div>
    </>
  );
}
