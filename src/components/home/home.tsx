import React from "react";
import { Posts } from "@/components/posts";
export const Home = ({ currentUser }) => {
  return (
    <div className="flex justify-center flex-col my-0 mx-auto w-[50%] mt-10">
      <Posts currentUser={currentUser} />
    </div>
  );
};
