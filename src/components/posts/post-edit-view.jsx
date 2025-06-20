import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Textarea, Button } from "@/components/ui";
import { updatePost } from "@/api";

export const PostEditView = ({ post, setEditPostView }) => {
  const [postValue, setPostValue] = useState(post.status);
  const handleOnChangeInput = (event) => {
    setPostValue(event.target.value);
  };

  const handleUpdatePost = () => {
    updatePost(post.id, postValue);
    setEditPostView(false);
  };

  return (
    <>
      <Button
        onClick={() => setEditPostView(false)}
        variant="secondary"
        size="icon"
        className="ml-auto size-10 shadow-none hover:bg-[#7978787c]"
      >
        <FontAwesomeIcon icon={faX} />
      </Button>
      <div>
        <Textarea
          className="common-textArea mb-3 pr-5 pl-5 whitespace-pre-wrap"
          onChange={handleOnChangeInput}
          value={postValue}
          rows={5}
        />
        <div className="text-right">
          <Button
            className="mr-3 rounded bg-[black] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]"
            type="cancel"
            onClick={() => setEditPostView(false)}
          >
            Cancel
          </Button>
          <Button
            className="rounded bg-[#0077B5] px-4 py-2 font-sans text-base text-white hover:bg-[#006699]"
            type="submit"
            onClick={handleUpdatePost}
          >
            Update
          </Button>
        </div>
      </div>
    </>
  );
};
