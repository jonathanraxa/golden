import React, { useMemo, useState } from "react";
import { getCurrentUser } from "@/api";
import { ConnectionPage } from "@/pages/connection-page";
import { TopNav } from "@/components/common/top-nav";

export const ConnectionLayout = () => {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <TopNav currentUser={currentUser} />
      <ConnectionPage currentUser={currentUser} />
    </div>
  );
};
