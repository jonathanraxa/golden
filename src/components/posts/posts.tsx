import React, { useState, useMemo } from "react";
import { getPosts } from "@/api/FirestoreAPI";
import { PostsForm } from "./posts-form";
import { PostsView } from "./posts-view";

export const Posts = ({ currentUser }) => {
  const [allPosts, setAllPosts] = useState([]);

  useMemo(() => {
    getPosts(setAllPosts);
  }, []);

  return (
    <>
      <PostsForm currentUser={currentUser} />
      <div className="mt-5 flex flex-col gap-5">
        {allPosts.map((post) => (
          <PostsView post={post} currentUser={currentUser} />
        ))}
      </div>
    </>
  );
};
