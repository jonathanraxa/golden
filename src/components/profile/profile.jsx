import React, { useState } from "react";
import { ProfileCard } from "./profile-card";
import { ProfileEdit } from "./profile-edit";

export const Profile = ({ currentUser }) => {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };

  return isEdit ? (
    <ProfileEdit onEdit={onEdit} currentUser={currentUser} />
  ) : (
    <ProfileCard currentUser={currentUser} onEdit={onEdit} />
  );
};
