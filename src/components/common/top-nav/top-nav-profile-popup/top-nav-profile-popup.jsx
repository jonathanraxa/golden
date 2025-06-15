import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onLogout } from "@/api/AuthAPI";
import { getCurrentUser } from "@/api";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "./index.scss";

export const TopNavProfilePopup = ({}) => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="absolute top-[65px] right-[10px] z-10 w-[300px]">
      <Card className="flex h-auto w-[auto] flex-col justify-center gap-0 rounded-[5px] border-[1px] border-[#a8a8a8] bg-[whitesmoke] py-3">
        <CardHeader>
          <div className="flex">
            <div className="mr-3 flex-shrink-0">
              <img
                className="right-[30px] h-[50px] w-[50px] cursor-pointer rounded-[50%] object-cover"
                src={currentUser.imageLink}
              />
            </div>
            <div>
              <CardTitle>{currentUser.name}</CardTitle>
              <CardDescription>{currentUser.headline}</CardDescription>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4 cursor-pointer rounded-[5px] border-[#212121] bg-white font-sans text-[14px] text-[#212121]"
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
        <CardContent className="px-0">
          <div>
            <div className="mt-3 px-6">
              <h5 className="font-bold">Account</h5>
              <ul>
                <li>
                  <Link>Settings & Privacy</Link>
                </li>
                <li>
                  <Link>Help</Link>
                </li>
                <li>
                  <Link>Language</Link>
                </li>
              </ul>
            </div>
            <hr className="mt-3 mb-3" />
            <div className="mb-3 px-6">
              <h5 className="font-bold">Manage</h5>
              <ul>
                <li>
                  <Link>Posts & Activity</Link>
                </li>
                <li>
                  <Link>Volunteer Posting Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <hr className="mt-3 mb-3" />

        <CardFooter>
          <Link onClick={onLogout}>Sign Out</Link>
        </CardFooter>
      </Card>
    </div>
  );
};
