import React, { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { getConnections } from "@/api";
import { Card, CardContent, CardFooter, Button } from "@/components/ui";

export const ConnectedUsers = ({ user, getCurrentUser, currentUser }) => {
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    getConnections(currentUser.id, user.id, setIsConnected);
  }, [currentUser.id, user.id]);
  const isConnectedTemp = true;
  return (
    isConnectedTemp && (
      <Card className="relative m-[10px] flex h-[330px] w-[250px] cursor-pointer flex-col items-center rounded-[10px] border border-[#bbbbbb] p-[10px]">
        <CardContent>
          <img
            className="mt-[1rem] h-[150px] w-[150px] rounded-full object-cover"
            src={user.imageLink}
          />
          <p className="mt-[1rem] font-sans text-[16px] font-semibold">
            {user.name}
          </p>
          <p className="mt-[15px] max-w-[200px] truncate overflow-hidden font-sans text-[15px] font-normal whitespace-nowrap">
            {user.headline}
          </p>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-center">
          <Button
            className="flex h-[40px] w-[90%] cursor-pointer items-center justify-center rounded-[30px] border border-[#004284] bg-white font-sans text-[16px] font-semibold text-[#004284] hover:border-2 hover:bg-[#bbdefb]"
            onClick={() => getCurrentUser(user.id)}
          >
            <AiOutlineUsergroupAdd size={20} />
            Connect
          </Button>
        </CardFooter>
      </Card>
    )
  );
};
