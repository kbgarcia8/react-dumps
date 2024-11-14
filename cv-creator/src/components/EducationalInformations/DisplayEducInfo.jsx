import { convertDate } from "../misc.js";
import "../../styles/EducationalInformations/DisplayEducInfo.css";

export function DisplayEducInfo({ props }) {
  const {
    id,
    universityName,
    degreeFinished,
    educationStartDate,
    educationEndDate,
  } = props;
  return (
    <div
      key={id}
      className="educ-entry-display"
      id={`education-info-entry-${id}`}
    >
      <p className="education-info-entry-title">{universityName}</p>
      <div className="education-info-additional-details">
        <p>{degreeFinished}</p>
        <p>
          {!isNaN(new Date(educationStartDate))
            ? convertDate(educationStartDate)
            : ""}
          -
          {!isNaN(new Date(educationEndDate))
            ? convertDate(educationEndDate)
            : ""}
        </p>
      </div>
    </div>
  );
}
