import React, { useEffect, useState } from "react";
import { getAllUsers, addConnection } from "@/api";
import { ConnectedUsers } from "./connected-users";

export const Connection = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const getCurrentUser = (id) => {
    addConnection(currentUser.id, id);
  };
  useEffect(() => {
    getAllUsers(setUsers);
  }, []);
  return users.length > 1 ? (
    <div className="m-[30px] grid grid-cols-2 items-center justify-center gap-[10px] rounded-[10px] border border-[#bbbbbb] bg-white p-[10px] text-center">
      {/* {users.map((user) => {
        return user.id !== currentUser.id && (
          <ConnectedUsers
          currentUser={currentUser}
          user={user}
          getCurrentUser={getCurrentUser}
        />
        )
      })} */}
      {users.map((user) => {
        return (
          <ConnectedUsers
            currentUser={currentUser}
            user={user}
            getCurrentUser={getCurrentUser}
          />
        );
      })}
    </div>
  ) : (
    <div className="m-[30px] grid grid-cols-2 items-center justify-center gap-[10px] rounded-[10px] border border-[#bbbbbb] bg-white p-[10px] text-center">
      No Connections to Add!
    </div>
  );
};
