import "../../styles/TechnicalSkillsInformation/DisplayTechInfo.css";

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
