import "../styles/Button.css";
import React from 'react';
export function Button({
  text,
  source = "/src/assets/no-image.svg",
  alt = "no-image",
  className = "button",
  id,
  buttonType,
  processClick,
  dataIndex
}) {

  return (
    <>
      <button onClick={processClick} className={className} id={id} type={buttonType} data-index={dataIndex}>
        <img src={source} alt={alt} />
        {text && <span>{text}</span>}
      </button>
    </>
  );
}