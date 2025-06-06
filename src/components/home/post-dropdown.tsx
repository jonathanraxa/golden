import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePost } from "@/api/FirestoreAPI";

export const PostDropdown = ({ postId }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="size-8 shadow-none">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="start">
        <DropdownMenuItem
          onClick={() => {
            deletePost(postId);
          }}
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
