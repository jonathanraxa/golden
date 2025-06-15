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
    <Card className="relative m-[5rem] w-[100%] rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] p-5">
      <CardHeader>
        <CardTitle className="flex justify-start">Edit profile</CardTitle>
        <CardAction>
          <Button
            className="cursor-pointer rounded-[30px] border-none bg-[#0073b1] font-sans text-[12px] font-semibold text-white outline-none"
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
            <label>State</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="State"
              name="state"
              value={editInputs.state}
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
            <label>Skills</label>
            <Input
              onChange={getInput}
              className="common-input"
              placeholder="Skill"
              name="skills"
              value={editInputs.skills}
            />
          </div>
          <div className="mt-3">
            <label>About</label>
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
