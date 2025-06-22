import { CommentActions } from "./comment-actions";

export const CommentView = ({ comments }) => {
  return (
    comments.length > 0 &&
    comments.map((comment) => {
      return (
        <div className="relative m-[2rem] flex flex-col justify-center rounded-[10px] bg-[rgb(227,227,227)] p-[1rem]">
          <div className="flex justify-between">
            <p className="text-md cursor-pointer font-extrabold text-gray-900 transition-colors duration-200 hover:text-blue-600">
              {comment.name}
            </p>
            <div className="flex items-center">
              <p className="mr-4 text-sm text-gray-500">{comment.timeStamp}</p>
              <CommentActions comment={comment} />
            </div>
          </div>
          <p className="mt-[1rem]">{comment.comment}</p>
        </div>
      );
    })
  );
};
