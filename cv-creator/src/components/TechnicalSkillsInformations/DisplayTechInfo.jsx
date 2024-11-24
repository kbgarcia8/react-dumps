import "../../styles/TechnicalSkillsInformations/DisplayTechInfo.css";
import React from 'react';
export function DisplayTechInfo({ props }) {
    const {
        techSkillsInformation,
        index
    
      } = props;
  return (
    <>
        <li key={`techskill-entry-${index}`} className="techskill-entry">{techSkillsInformation}</li>
    </>
  );
}
