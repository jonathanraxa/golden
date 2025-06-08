import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";
import { editProfile } from "@/api/FirestoreAPI";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInputs] = useState(currentUser);

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <Card className="w-[100%] p-5 relative bg-[whitesmoke] border border-[#b7b7b7] rounded-[7px] m-[5rem]">
      <CardHeader>
        <CardTitle className="flex justify-start">Edit profile</CardTitle>
        <CardAction>
          <Button
            className="
            cursor-pointer
            bg-[#0073b1]
            rounded-[30px]
            outline-none
            border-none
            font-sans
            font-semibold
            text-white
            text-[12px]"
            onClick={() => onEdit()}
          >
            <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="profile-edit-inputs">
          <div className="mt-3">
            <label>Name</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Name"
              name="name"
              value={editInputs.name}
            />
          </div>
          <div className="mt-3">
            <label>Headline</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Headline"
              value={editInputs.headline}
              name="headline"
            />
          </div>
          <div className="mt-3">
            <label>Country</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Country"
              name="country"
              value={editInputs.country}
            />
          </div>
          <div className="mt-3">
            <label>City</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="City"
              name="city"
              value={editInputs.city}
            />
          </div>
          <div className="mt-3">
            <label>Company</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Company"
              value={editInputs.company}
              name="company"
            />
          </div>
          <div className="mt-3">
            <label>Industry </label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Industry"
              name="industry"
              value={editInputs.industry}
            />
          </div>
          <div className="mt-3">
            <label>College</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="College"
              name="college"
              value={editInputs.college}
            />
          </div>
          <div className="mt-3">
            <label>Website</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Website"
              name="website"
              value={editInputs.website}
            />
          </div>
          <div className="mt-3">
            <label>About</label>
            <Textarea
              placeholder="About Me"
              className="common-textArea"
              onChange={getInput}
              rows={5}
              name="aboutMe"
              value={editInputs.aboutMe}
            />
          </div>
          <div className="mt-3">
            <label>Skills</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Skill"
              name="skills"
              value={editInputs.skills}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="
            w-[300px]
            h-[50px]
            cursor-pointer
            bg-[#0073b1]
            rounded-[30px]
            outline-none
            border-none
            font-sans
            font-semibold
            text-white
            text-[18px]
            mt-[20px]"
          onClick={updateProfileData}
        >
          Save
        </Button>
      </CardFooter>
    </Card>
  );
};
