import '../styles/components/Button.css';
import React from 'react';
function Button({
  text,
  source,
  alt = 'no-image',
  className = 'button',
  id,
  buttonType,
  processClick,
}) {
  return (
    <>
      <button
        onClick={processClick}
        className={className}
        id={id}
        type={buttonType}
      >
        {source && <img src={source} alt={alt} />}
        {text && <span id={id}>{text}</span>}
      </button>
    </>
  );
}

export default Button;
