import React from "react";
import {
  Input,
  Label,
  Dialog,
  DialogTrigger,
  DialogContent,
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
      <DialogContent className="flex h-auto flex-col items-center justify-center bg-white">
        <div className="image-upload-main">
          <p>{currentImage.name}</p>
          <Label
            class="cursor-pointer border border-[#212121] p-[10px] font-sans"
            for="image-upload"
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
      </DialogContent>
    </Dialog>
  );
};
