import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProfileAboutCard = ({ currentUser, onEditAbout }) => {
  // currentProfile is the profile we selected
  const [currentProfile, setCurrentProfile] = useState({});

  const source =
    Object.keys(currentProfile).length > 0 ? currentProfile : currentUser;

  const { aboutMe } = source;

  return (
    <Card className="relative mt-[3rem] min-h-100 w-[100%] rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] p-5">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl">About</h2>
        </CardTitle>
        <CardAction>
          <Button
            className="cursor-pointer rounded-[30px] border-none bg-[#0073b1] text-white outline-none"
            onClick={() => onEditAbout()}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="font-sans break-words whitespace-pre-wrap">{aboutMe}</p>
      </CardContent>
    </Card>
  );
};
