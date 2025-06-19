import React from "react";
import {
  Input,
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogTitle,
  Button,
} from "@/components/ui";

export const ProfileUploadImage = ({
  children,
  getImage,
  uploadImage,
  currentImage,
  progress,
}) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogTitle>Add a Profile Image</DialogTitle>
        <div className="flex h-auto flex-col items-center justify-center">
          <p>{currentImage.name}</p>
          <Label
            className="cursor-pointer border border-[#212121] p-[10px] font-sans"
            htmlFor="image-upload"
          >
            Choose File
          </Label>
          {progress !== 0 && (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          <Input hidden id="image-upload" type="file" onChange={getImage} />
        </div>
        <DialogFooter>
          <Button
            disabled={currentImage.name ? false : true}
            key="submit"
            type="primary"
            onClick={uploadImage}
            className="button-start-common mt-5"
          >
            Upload Profile Picture
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
