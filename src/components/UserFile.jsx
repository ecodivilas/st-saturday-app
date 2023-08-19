import React from "react";
import ProfilePicture from "./ProfilePicture";
import Cards from "./components/Cards";
import Buttons from "./Buttons";

const UserFile = () => {
  return (
    <div>
      <ProfilePicture />
      <Cards/>
      <Buttons />
    </div>
  );
};

export default UserFile;
