import { convertDate } from "../misc.js";
import "../../styles/WorkExperienceInformations/DisplayWorkExpInfo.css";

export function DisplayWorkExpInfo({ props }) {
    const {
        id,
        companyName,
        jobPosition,
        experienceStartDate,
        experienceEndDate,
        isPresent,
        jobTasks,
    
      } = props;
  return (
    <div
      key={id}
      className="educ-entry-display"
      id={`workexp-info-entry-${id}`}
    >
      <p className="workexp-info-entry-title">{companyName}</p>
      <div className="workexp-info-additional-details">
        <p>{jobPosition}</p>
        <p>
          {!isNaN(new Date(experienceStartDate))
            ? convertDate(experienceStartDate)
            : ""}
          -
          {isPresent ? "Present" : !isNaN(new Date(experienceEndDate))
            ? convertDate(experienceEndDate)
            : ""}
        </p>
      </div>
    </div>
  );
}
