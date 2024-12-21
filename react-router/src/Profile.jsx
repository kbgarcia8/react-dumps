import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DefaultProfile from "./DefaultProfile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import { isValidName } from './validateName';

const Profile = () => {
  const { name } = useParams();

  if (!isValidName(name)) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "default" && (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;