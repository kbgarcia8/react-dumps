import "../../styles/TechnicalSkillsInformations/EditTechSkillsInfo.css"
import { Button } from "../Button.jsx";
import { Inputs } from "../Inputs.jsx";

export function EditTechSkillsInfo({
  techSkills,
  handleTechSkillsInfoChange,
  addTechSkill,
  deleteTechSkill,
  TechSkillsInfoCancelEdit,
  TechSkillsInfoSaveEdit,
}) {
  return (
    <>
      <form
        id="techskills-info-form"
        onSubmit={TechSkillsInfoSaveEdit}
        className="techskills-info-form"
      >
        <fieldset>
          <legend></legend>
          {techSkills.map((techSkill, index) => (
            <Inputs
              key={`techskill-${index}`}
              id={`techskill-${index}`}
              labelText={`Technical Skill ${index + 1}`}
              placeholderText={`Skill ${index + 1}`}
              type="text"
              dataKey={`${index}`}
              value={techSkill}
              onChange={handleTechSkillsInfoChange}
            />
          ))}
          <div className="add-remove-techskill-btn-space">
            <Button
              text=""
              source="/src/assets/minus.svg"
              alt="delete-techskill"
              className="delete-techskill-btn"
              id="techskills-info-form"
              buttonType="button"
              processClick={deleteTechSkill}
            />
            <Button
              text=""
              source="/src/assets/plus.svg"
              alt="add-techskill"
              className="add-techskill-btn"
              id="techskills-info-form"
              buttonType="button"
              processClick={addTechSkill}
            />
          </div>          
          <div className="techskills-buttons-space">
            <Button
              text="Cancel"
              source="/src/assets/handle-x.svg"
              alt="cancel-edit"
              className="techskills-button"
              id="cancel-techskills"
              buttonType="button"
              processClick={TechSkillsInfoCancelEdit}
            />
            <Button
              text="Save"
              source="/src/assets/check-one.svg"
              alt="save-form"
              className="techskills-button"
              id="save-techskills"
              buttonType="submit"
            />
        </div>
        </fieldset>
      </form>
    </>
  );
}
