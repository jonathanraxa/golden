import React, { useMemo, useState } from "react";
import moment from "moment";
import { AiOutlineComment } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { Textarea, Button } from "@/components/ui";
import { likePost, getLikesByUser, postComment, getComments } from "@/api";
import { CommentView } from "./comment-view";

const currentTime = moment().format("LLL");

export const LikeButton = ({ postId, currentUser }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleLike = () => {
    likePost(currentUser.id, postId, liked);
  };
  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(postId, comment, currentTime, currentUser?.name);
    setComment("");
  };

  useMemo(() => {
    getLikesByUser(currentUser?.id, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
  }, [currentUser?.id, postId]);

  return (
    <div className="w-full">
      <p className="text-sm font-normal text-[rgba(80,78,78,0.84)]">
        {likesCount} Likes
      </p>

      <hr className="mt-5 mb-5 border-t border-gray-400" />

      <div className="flex justify-around">
        <div className="flex cursor-pointer items-center" onClick={handleLike}>
          {liked ? (
            <BsFillHandThumbsUpFill size={30} color="#0a66c2" />
          ) : (
            <BsHandThumbsUp size={30} />
          )}

          <p className={liked ? "blue" : "black"}>Like</p>
        </div>
        <div
          className="mr-5 flex cursor-pointer items-center"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          {
            <AiOutlineComment
              size={30}
              color={showCommentBox ? "#0a66c2" : "#212121"}
            />
          }
          <p className={showCommentBox ? "blue" : "black"}>
            {comments?.length} Comments
          </p>
        </div>
      </div>
      {showCommentBox && (
        <>
          <div className="flex flex-col items-center justify-center">
            <Textarea
              onChange={getComment}
              placeholder="Add a Comment"
              className="mx-auto mt-[2rem] w-[90%]"
              name="comment"
              value={comment}
            />
            <Button
              className="mt-[15px] mb-[15px] h-[35px] w-[150px] cursor-pointer rounded-[30px] border-none bg-[#0a66c2] text-white outline-none"
              onClick={addComment}
              disabled={!comment.trim().length}
            >
              Add Comment
            </Button>
          </div>

          <CommentView comments={comments} />
        </>
      )}
    </div>
  );
};
