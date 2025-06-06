import React, { useState } from "react";
import { ProfileCard } from "./profile-card";
// import ProfileEdit from "./common/ProfileEdit";

export const Profile = ({ currentUser }) => {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };

  return (
    <div>
      <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      {/* {isEdit ? (
        <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onEdit={onEdit} />
      )} */}
    </div>
  );
};
