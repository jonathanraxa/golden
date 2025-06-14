import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui";

export const CommentView = ({ comments }) => {
  const handleEditComment = () => {
    console.log("edit comment");
  };
  return (
    comments.length > 0 &&
    comments.map((comment) => {
      return (
        <div className="relative m-[2rem] flex flex-col justify-center rounded-[10px] bg-[rgb(227,227,227)] p-[1rem]">
          <div className="flex justify-between">
            <p className="ml-[10px] text-[#212121] no-underline">
              {comment.name}
            </p>
            <div className="flex items-center">
              <p className="text-sm text-gray-500">{comment.timeStamp}</p>
              <Button
                onClick={handleEditComment}
                variant="secondary"
                size="icon"
                className="size-8 shadow-none"
              >
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </div>
          </div>
          <p className="mt-0 ml-[10px]">{comment.comment}</p>
        </div>
      );
    })
  );
};
