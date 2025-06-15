import React, { useMemo, useState } from "react";
import { getCurrentUser } from "@/api";
import { ProfilePage } from "@/pages/profile-page";
import { TopNav } from "@/components/common";

export const ProfileLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopNav currentUser={currentUser} />
      <ProfilePage currentUser={currentUser} />
    </div>
  );
};
