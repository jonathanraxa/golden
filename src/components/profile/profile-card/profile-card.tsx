import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  ProfileAboutEdit,
  ProfileAboutCard,
} from "@/components/profile/profile-about-card";
import { PostsView } from "@/components/posts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getPosts,
  getSingleStatus,
  getSingleUser,
  getCurrentUser,
  uploadImage as uploadImageAPI,
} from "@/api";
import { ProfileUploadImage } from "@/components/profile/profile-upload-image";

export const ProfileCard = ({ onEdit }) => {
  const location = useLocation();
  const [allPosts, setAllPosts] = useState([]);
  const [isEditAbout, setIsEditAbout] = useState(false);

  // currentProfile is the profile we selected
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [progress, setProgress] = useState(0);
  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };
  const source =
    Object.keys(currentProfile).length > 0 ? currentProfile : currentUser;

  const {
    imageLink,
    name,
    headline,
    country,
    city,
    state,
    company,
    industry,
    website,
    skills,
    timeStamp,
  } = source;

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  
  console.log("currentUser", currentUser);

  const uploadImage = () => {
    uploadImageAPI(currentImage, currentUser.id, setProgress, setCurrentImage);
  };

  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllPosts, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  const onEditAbout = () => {
    setIsEditAbout(!isEditAbout);
  };

  return (
    <div className="m-[5rem] flex w-screen flex-col">
      <Card className="relative min-h-10 w-[100%] rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] p-5">
        <CardHeader>
          <ProfileUploadImage
            getImage={getImage}
            uploadImage={uploadImage}
            currentImage={currentImage}
            progress={progress}
          >
            {imageLink && <img
              src={imageLink}
              className="h-[90px] w-[90px] cursor-pointer rounded-[50%] object-cover"
            />}
          </ProfileUploadImage>
          <div className="px-2">
            <CardTitle className="cursor-pointer text-xl font-extrabold text-gray-900 transition-colors duration-200 hover:text-blue-600">
              {name}
            </CardTitle>
            <CardDescription className="font-small mt-2 text-sm leading-none text-[#757575]">
              {timeStamp}
            </CardDescription>
          </div>
          <CardAction>
            <Button
              className="cursor-pointer rounded-[30px] border-none bg-[#0073b1] text-white outline-none"
              onClick={() => onEdit()}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div>
              {industry && (
                <p>
                  {industry}
                </p>
              )}
              {
                skills && (
                  <p>
                  {skills}
                </p>
                )
              }
             {
               (city || state || country) && (
                <p className="mt-3">
                {city}, {state} | {country}
              </p>
               )
             }
            </div>
            <div>
              {company && <p>{company}</p>}
              {website && <p>{website}</p>}
            </div>
          </div>
        </CardContent>
      </Card>
      {isEditAbout ? (
        <ProfileAboutEdit onEditAbout={onEditAbout} currentUser={currentUser} />
      ) : (
        <ProfileAboutCard currentUser={currentUser} onEditAbout={onEditAbout} />
      )}
      <div className="mt-[3rem]">
        {allPosts
          .filter(
            (item) => item.userEmail === localStorage.getItem("userEmail"),
          )
          .map((post) => {
            return <PostsView post={post} currentUser={currentUser} />;
          })}
      </div>
    </div>
  );
};
