import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "@/api";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProfileAboutEdit = ({ onEditAbout, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEditAbout();
  };

  return (
    <Card className="text-card-foreground relative mt-[3rem] flex min-h-100 w-[100%] flex-col gap-6 rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] p-5 shadow-sm">
      <CardHeader>
        <CardTitle>
          <h2 className="text-2xl">Edit About</h2>
        </CardTitle>
        <CardAction>
          <Button
            className="cursor-pointer rounded-[30px] border-none bg-[#0073b1] font-sans text-[12px] font-semibold text-white outline-none"
            onClick={() => onEditAbout()}
          >
            <AiOutlineClose className="close-icon" size={25} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="profile-edit-inputs">
          <div className="mt-3">
            <Textarea
              placeholder="About Me"
              className="common-textArea whitespace-pre-wrap"
              onChange={getInput}
              rows={5}
              name="aboutMe"
              value={editInputs.aboutMe}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="mt-[20px] h-[50px] w-[300px] cursor-pointer rounded-[30px] border-none bg-[#0073b1] font-sans text-[18px] font-semibold text-white outline-none"
          onClick={updateProfileData}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
