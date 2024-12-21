import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoToProfile = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const newName = e.target.textContent.toLowerCase();
    navigate(`/profile/${newName}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Popeye</button>
      <button onClick={handleClick}>Spinach</button>
      <button onClick={handleClick}>Default</button>
    </div>
  );
};

export default GoToProfile;