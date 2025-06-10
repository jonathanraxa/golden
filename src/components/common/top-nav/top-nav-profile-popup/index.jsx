import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onLogout } from "@/api/AuthAPI";
import { getCurrentUser } from "@/api/FirestoreAPI";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./index.scss";

export default function ProfilePopup() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="absolute top-[65px] right-[10px] z-10 w-[300px]">
      <Card className="flex h-auto w-[auto] flex-col justify-center rounded-[5px] border-[1px] border-[#a8a8a8] bg-[whitesmoke]">
        <CardHeader>
          <div className="flex">
            <div className="mr-3">
              <img
                className="right-[30px] h-[50px] w-[50px] cursor-pointer rounded-[50%] object-cover"
                src={currentUser.imageLink}
              />
            </div>
            <div>
              <CardTitle>{currentUser.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </div>
          </div>
          <Button
            variant="outline"
            className="cursor-pointer rounded-[5px] border-[#212121] bg-white font-sans text-[14px] text-[#212121]"
            onClick={() =>
              navigate(routes.profile, {
                state: {
                  id: currentUser?.id,
                },
              })
            }
          >
            View Profile
          </Button>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            className="border-[#212121] bg-white p-[10px] font-sans text-[16px] text-[#212121]"
            onClick={onLogout}
          >
            Sign out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
