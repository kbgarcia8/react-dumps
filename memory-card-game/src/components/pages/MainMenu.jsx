import "../../styles/pages/MainMenu.css";
import leagueLogo from "../../assets/League-of-Legends-Logo.png";

function MainMenu({}) {
  return (
    <>
      <div className="page-container" id="main-menu-container">
        <div className="main-menu-logo-space">
          <img
            className="main-menu-logo"
            src={leagueLogo}
            alt="league-logo"
          ></img>
          <span className="main-menu-logo-text">Memory Card Game</span>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
