import React from "react";
import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardAction,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { PostDropdown } from "@/components/home/post-dropdown";
import { LikeButton } from "@/components/common/like-button";

export const PostsView = ({ post, currentUser }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="mt-[30px] flex min-h-auto flex-col rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] px-2 pb-5"
      key={post.id}
    >
      <CardHeader className="flex content-center justify-between px-0">
        <div className="px-2">
          <CardTitle
            className="cursor-pointer text-xl font-extrabold text-gray-900 transition-colors duration-200 hover:text-blue-600"
            onClick={() => navigate(routes.profile)}
          >
            {post.userName}
          </CardTitle>
          <CardDescription className="font-small mt-2 text-sm leading-none text-[#757575]">
            {post.timeStamp}
          </CardDescription>
        </div>
        <CardAction>
          <PostDropdown postId={post.id} />
        </CardAction>
      </CardHeader>
      <CardContent className="px-2">
        <p>{post.status}</p>
      </CardContent>
      <CardFooter className="px-2">
        <LikeButton postId={post.id} currentUser={currentUser} />
      </CardFooter>
    </Card>
  );
};
