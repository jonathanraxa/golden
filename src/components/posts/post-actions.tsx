import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui";
import { deletePost } from "@/api";

export const PostActions = ({ postId, onEditPost }) => {
  return (
    <div>
      <Button
        onClick={onEditPost}
        variant="secondary"
        size="icon"
        className="size-10 shadow-none hover:bg-[#7978787c]"
      >
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Button
        onClick={() => {
          deletePost(postId);
        }}
        variant="secondary"
        size="icon"
        className="size-10 shadow-none hover:bg-[#7978787c]"
      >
        <FontAwesomeIcon icon={faTrash} />
      </Button>
    </div>
  );
};
