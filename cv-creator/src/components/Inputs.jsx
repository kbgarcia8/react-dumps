import { useState } from "react";
import "../styles/Inputs.css"

export function Inputs({
    inputType,
    id,
    labelText,
    placeholderText,
    type,
    value,
    isRequired = true,
    rows = "4",
    cols = "30",
    onChange,
  }) {
    return (
        <div className="input-container">
          <label htmlFor={id}>{labelText}: </label>
          {inputType === "textarea" ? (
            <textarea
              id={id}
              placeholder={placeholderText}
              onChange={onChange}
              value={value}
              rows={rows}
              cols={cols}
            ></textarea>
          ) : (
            <input
              id={id}
              placeholder={placeholderText}
              onChange={onChange}
              value={value}
              type={type}
              required={isRequired ? "required" : ""}
            />
          )}
        </div>
    );
  }