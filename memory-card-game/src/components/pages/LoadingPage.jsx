import "../../styles/pages/LoadingPage.css";
import teemoRunning from "../../assets/teemo_running.gif";
import { useState, useEffect } from "react";

export function LoadingPage({}) {
  const [percentage, setPercentage] = useState(0);
  const progressStyle = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#ae914b",
    borderRadius: "inherit",
    border: "2px solid black",
    textAlign: "right",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) return percentage;
        return prevPercentage + Math.floor(Math.random() * 2);
      });
    }, 10);
    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div className="page-container" id="loading-page-container">
      <div id="gif-container">
        <img src={teemoRunning} id="loading-page-gif"></img>
      </div>
      <span id="loading-text">Loading...</span>
      <div id="loading-bar-container">
        <div id="progress" style={progressStyle}>
          <span id="progress-label">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
