import React, { useMemo, useState } from "react";
import { getCurrentUser } from "@/api";
import { HomePage } from "@/pages/home-page";
import { TopNav } from "@/components/common/top-nav";

export const HomeLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopNav currentUser={currentUser} />
      <HomePage currentUser={currentUser} />
    </div>
  );
};
