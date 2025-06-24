import React from "react";
import { Posts } from "@/components/posts";
import { HomeUserDetails } from "./home-user-details";

export const Home = ({ currentUser }) => (
  <div className="mx-auto my-0 mt-10 flex w-[50%] flex-col justify-center">
    <HomeUserDetails currentUser={currentUser} />
    <Posts currentUser={currentUser} />
  </div>
);
