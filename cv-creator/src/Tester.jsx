import { EditEducInfo } from "./components/EducationalInformations/EditEducInfo.jsx"
import { Button } from "./components/Button.jsx"
import "../src/styles/Tester.css"
import { cvData } from "./components/data"
import { useState } from "react"

export default function Tester() {
    const educInfos = cvData.educationalInformations
    const [educInformations, setEducInformations] = useState(educInfos)
    function processEducInfoChange(e) {
        const changedFormId = parseInt(e.target.closest('form').id)
        const { key } = e.target.dataset;
        setEducInformations(prevEducInfos => 
            prevEducInfos.map((educInformation) =>
                educInformation.id === changedFormId
                ? {...educInformation, [key]: e.target.value}
                : educInformation
            )
        )
        //educInformations.map(info => console.log(info))
    }

    function deleteEducEntry() {
        
    }
    
    //console.log(crypto.randomUUID())
    return(
        <div className="test-container">
            {educInformations.map(educInformation => (
            <EditEducInfo
                key={educInformation.id}
                props={educInformation}
                handleEducInfoChange={processEducInfoChange}
                
            />
            ))}
            <Button 
                text=""
                source="/src/assets/plus.svg"
                alt="add-educ-info"
                id="add-educ-info"
            />
        </div>
    )
}