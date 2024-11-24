import "../../styles/AestheticChanger/AestheticChanger.css";
import { Inputs } from "../Inputs.jsx";
import React from 'react';
export function AestheticChanger({
    personalInfoStyle,
    processPersonalInfoStyleChange,
    sectionHeaderStyle,
    processSectionHeaderStyle,
    entriesStyle,
    processSectionDetailsStyle
}) {

  return (
    <form id="document-style">
        <div className="personal-info-style">
            <fieldset>
                <legend className="aesthetic-legends">Personal Information Section</legend>
                <Inputs
                id={"personal-info-background-color"}
                labelText={"Background Color"}
                type={"color"}
                value={personalInfoStyle.backgroundColor}
                dataKey={"backgroundColor"}
                onChange={processPersonalInfoStyleChange}
                />
                <Inputs
                id={"personal-info-text-color"}
                labelText={"Text/Icon Color"}
                type={"color"}
                value={personalInfoStyle.color}
                dataKey={"color"}
                onChange={processPersonalInfoStyleChange}
                />
                <label htmlFor="personal-info-font-family-select">Font Style:</label>
                <select 
                name="personal-info-font-family" 
                id="personal-info-font-family-select"                    
                onChange={processPersonalInfoStyleChange}
                data-key={"fontFamily"}
                defaultValue={personalInfoStyle.fontFamily}
                >
                <option value="Rubik">Rubik</option>
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Verdana">Verdana</option>
                <option value="Lato">Lato</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Garamond">Garamond</option>
                <option value="Georgia">Georgia</option>
                <option value="Berserkerville">Berserkerville</option>
                <option value="Palatino Linotype">Palatino Linotype</option>                  
                </select>                    
            </fieldset>
        </div>
        <div className="entry-headers-style">
            <fieldset>
                <legend className="aesthetic-legends">Entries Header Section</legend>                    
                <label htmlFor="entry-headers-font-family-select">Font Style:</label>
                <select 
                name="entry-headers-font-family" 
                id="entry-headers-font-family-select"                    
                onChange={processSectionHeaderStyle}
                data-key={"fontFamily"}
                defaultValue={sectionHeaderStyle.fontFamily}
                >
                <option value="Rubik" selected>Rubik</option>
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Verdana">Verdana</option>
                <option value="Lato">Lato</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Garamond">Garamond</option>
                <option value="Georgia">Georgia</option>
                <option value="Berserkerville">Berserkerville</option>
                <option value="Palatino Linotype">Palatino Linotype</option>                  
                </select>
                <label htmlFor="entry-headers-font-weight-select">Font Weight:</label>
                <select 
                name="entry-headers-font-weight" 
                id="entry-headers-font-weight-select"                    
                onChange={processSectionHeaderStyle}
                data-key={"fontWeight"}
                defaultValue={sectionHeaderStyle.fontWeight}
                >
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
                <option value="800">800</option>
                <option value="900">900</option>                      
                </select>
                <label htmlFor="entry-headers-font-weight-select">Font Weight:</label>
                <select 
                name="entry-headers-font-size" 
                id="entry-headers-font-size-select"                    
                onChange={processSectionHeaderStyle}
                data-key={"fontSize"}
                disabled
                >
                <option value="1vmax" selected>1vmax</option>                      
                </select>
            </fieldset>
        </div>
        <div className="entiries-details-style">
            <fieldset>
                <legend className="aesthetic-legends">Entries Details Section</legend>                    
                <label htmlFor="entry-details-font-family-select">Font Style:</label>
                <select 
                name="entry-details-font-family" 
                id="entry-details-font-family-select"                    
                onChange={processSectionDetailsStyle}
                data-key={"fontFamily"}
                defaultValue={entriesStyle.fontFamily}
                >
                <option value="Rubik" selected>Rubik</option>
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Verdana">Verdana</option>
                <option value="Lato">Lato</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Garamond">Garamond</option>
                <option value="Georgia">Georgia</option>
                <option value="Berserkerville">Berserkerville</option>
                <option value="Palatino Linotype">Palatino Linotype</option>                  
                </select>
                <label htmlFor="entry-details-font-weight-select">Font Weight:</label>
                <select 
                name="entry-details-font-size" 
                id="entry-details-font-size-select"                    
                onChange={processSectionDetailsStyle}
                data-key={"fontSize"}
                disabled
                >
                <option value="1vmax" selected>1vmax</option>                      
                </select>
            </fieldset>
        </div>
    </form>    
  );
}
