import React from "react";
import { Posts } from "@/components/posts";
export const Home = ({ currentUser }) => {
  return (
    <div className="mx-auto my-0 mt-10 flex w-[50%] flex-col justify-center">
      <Posts currentUser={currentUser} />
    </div>
  );
};
