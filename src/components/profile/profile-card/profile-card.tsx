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
      <Card className="w-[100%] p-5 relative bg-[whitesmoke] border border-[#b7b7b7] rounded-[7px]">
        <CardHeader>
          <div className="w-[5rem] h-auto">
            <img src={imageLink} />
          </div>
          <CardTitle className="font-bold">{name}</CardTitle>
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
          <p>{country}</p>
          <p>{city}</p>
          <p>{company}</p>
          <p>{industry}</p>
          <p>{website}</p>
          <p>{aboutMe}</p>
          <p>{skills}</p>
        </CardContent>
      </Card>
      <div>
        {allPosts.map((post) => {
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
