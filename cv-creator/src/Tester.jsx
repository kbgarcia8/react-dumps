import "./styles/Tester.css";
import { cvData } from "./components/data";
import { EditWorkExpInfo } from "./components/WorkExperienceInformations/EditWorkExpInfo";
import { useState } from "react";

export default function Tester() {
const workExperienceData = cvData.workExperiences
const [workExpInformations, setWorkExpInformations] = useState(workExperienceData);
  function processWorkExpInfoChange(e) {
    const changedFormId = parseInt(e.target.closest("form").id);
    const { key } = e.target.dataset;
    setEducInformations((prevEducInfos) =>
      prevEducInfos.map((educInformation) =>
        educInformation.id === changedFormId
          ? { ...educInformation, [key]: e.target.value }
          : educInformation
      )
    );
  }
  return (
    <>      
      <div className="test-container">
        {workExperienceData.map((workExperience) => (
          <EditWorkExpInfo
              key={workExperience.id}
              props={workExperience}
              handleWorkExpInfoChange={processWorkExpInfoChange}
          />
        ))}
      </div>
    </>
  );
}
