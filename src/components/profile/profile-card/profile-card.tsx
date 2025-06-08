import React, { useState, useMemo } from "react";

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
import { getPosts } from "@/api/FirestoreAPI";

export const ProfileCard = ({ currentUser, onEdit }) => {
  const [allPosts, setAllPosts] = useState([]);

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
  } = currentUser;

  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  return (
    <div className="flex flex-col m-[5rem] w-screen">
      <Card className="w-[100%] p-5 relative bg-[whitesmoke] border border-[#b7b7b7] rounded-[7px] min-h-100">
        <CardHeader>
          <div className="w-[5rem] h-auto">
            <img src={imageLink} />
          </div>
          <CardTitle>
            <h2 className="text-2xl">{name}</h2>
          </CardTitle>
          <CardDescription>{headline}</CardDescription>
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
              Edit
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
                {city}, {state} - {country}
              </p>
            </div>
            <div>
              <p>{company}</p>
              <p>{website}</p>
            </div>
          </div>
          <p>{aboutMe}</p>
        </CardContent>
      </Card>
      <div>
        {allPosts
          .filter(
            (item) => item.userEmail === localStorage.getItem("userEmail"),
          )
          .map((post) => {
            return (
              <Card
                className="px-2 min-h-auto bg-[whitesmoke] border border-[#b7b7b7] rounded-[7px] flex flex-col pb-5 max-w-1/2 mx-auto mt-4"
                key={post.id}
              >
                <CardHeader className="px-0 flex justify-between content-center">
                  <CardDescription className="px-2 text-sm leading-none font-small text-[#757575]">
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
