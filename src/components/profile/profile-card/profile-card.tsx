import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import {
  ProfileAboutEdit,
  ProfileAboutCard,
} from "@/components/profile/profile-about-card";
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
import { PostDropdown } from "@/components/home/post-dropdown";
import { getPosts, getSingleStatus, getSingleUser } from "@/api/FirestoreAPI";

export const ProfileCard = ({ currentUser, onEdit }) => {
  const location = useLocation();
  const [allPosts, setAllPosts] = useState([]);
  const [isEditAbout, setIsEditAbout] = useState(false);

  // currentProfile is the profile we selected
  const [currentProfile, setCurrentProfile] = useState({});

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
    aboutMe,
    skills,
  } = source;

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
          <img
            src={imageLink}
            className="h-[90px] w-[90px] cursor-pointer rounded-[50%] object-cover"
          />
          <CardTitle>
            <h2 className="text-2xl">{name}</h2>
          </CardTitle>
          <CardDescription>{headline}</CardDescription>
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
              <p>
                {industry} | {skills}
              </p>
              <p className="mt-3">
                {city}, {state} | {country}
              </p>
            </div>
            <div>
              <p>{company}</p>
              <p>{website}</p>
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
            return (
              <Card
                className="mx-auto mt-4 flex min-h-auto max-w-1/2 flex-col rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] px-2 pb-5"
                key={post.id}
              >
                <CardHeader className="flex content-center justify-between px-0">
                  <CardDescription className="font-small px-2 text-sm leading-none text-[#757575]">
                    {post.timeStamp}
                  </CardDescription>
                  <CardAction>
                    <PostDropdown postId={post.id} />
                  </CardAction>
                </CardHeader>
                <CardContent className="px-2">
                  <p>{post.status}</p>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
