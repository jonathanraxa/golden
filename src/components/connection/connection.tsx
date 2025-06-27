import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "@/api";
import { ConnectedUsers } from "./connected-users";

export const Connection = ({ currentUser }) => {
  const [users, setUsers] = useState([]);

  const getCurrentUser = (id: string) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  return (
    <div className="m-[30px] grid grid-cols-2 items-center justify-center gap-[10px] rounded-[10px] border border-[#bbbbbb] bg-white p-[10px] text-center">
      {users.length > 1 ? (
        users.map((user) => {
          return (
            user.id !== currentUser.id && (
              <ConnectedUsers
                currentUser={currentUser}
                user={user}
                getCurrentUser={getCurrentUser}
              />
            )
          );
        })
      ) : (
        <p>No Connections to Add!</p>
      )}
      ;
    </div>
  );
};
