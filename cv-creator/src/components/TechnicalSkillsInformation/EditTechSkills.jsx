import "../../styles/TechnicalSkillsInformations/EditTechSkillsInfo.css";
import { Button } from "../Button.jsx";
import { Inputs } from "../Inputs.jsx";

export function EditTechSkillsInfo({
  techSkills,
  handleTechSkillsInfoChange,
  addTechSkill,
  deleteTechSkill,
  //WorkExpInfoCancelEdit,
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
              keys={`techskill-${index}`}
              id={`techskill-${index}`}
              labelText={`Technical Skill ${index + 1}`}
              placeholderText={`Skill ${index + 1}`}
              type="text"
              dataKey={`${index}`}
              value={techSkill}
              onChange={handleTechSkillsInfoChange}
            />
          ))}
          <div className="add-techskill-btn-space">
            <Button
              text=""
              source="/assets/minus.svg"
              alt="delete-techskill"
              className="delete-techskill-btn"
              id="techskills-info-form"
              buttonType="button"
              processClick={deleteTechSkill}
            />
            <Button
              text=""
              source="/assets/plus.svg"
              alt="add-techskill"
              className="add-techskill-btn"
              id="techskills-info-form"
              buttonType="button"
              processClick={addTechSkill}
            />
          </div>
          {/*<div className="workexp-entry-buttons-space">
            <Button
              text="Delete"
              source="src/assets/delete.svg"
              alt="delete-form"
              className="workexp-entry-button"
              id={`delete-workexp-info-${id}`}
              buttonType="button"
              processClick={WorkExpInfoDeletion}
            />
            <Button
              text="Cancel"
              source="src/assets/handle-x.svg"
              alt="cancel-edit"
              className="workexp-entry-button"
              id={`cancel-workexp-info-${id}`}
              buttonType="button"
              processClick={WorkExpInfoCancelEdit}
            />
            <Button
              text="Save"
              source="src/assets/check-one.svg"
              alt="save-form"
              className="workexp-entry-button"
              id={`save-workexp-info-${id}`}
              buttonType="submit"
            />
        </div>*/}
        </fieldset>
      </form>
    </>
  );
}
