import "../styles/LoadingPage.css";
import bardWwalking from "../assets/bard_walking.gif"
import teemoRunning from "../assets/teemo_running.gif"

export function LoadingPage({}) {
  

  const progressStyle = {
    height: '100%',
    width: `50%`,
    backgroundColor: "#ae914b",
    borderRadius: 'inherit',
    border: "2px solid black",
    textAlign: 'right'
  }

  return (
    <div
      className="page-container"
      id="loading-page-container"
    >
      <div id="gif-container">
        <img src={teemoRunning} id="loading-page-gif"></img>
      </div>
      <div id="loading-bar-container">
        <div id="progress" style={progressStyle}>
          <span id="progress-label">
            10%
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage
