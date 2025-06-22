import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteComment } from "@/api";

export const CommentActions = ({ commentId }) => {
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
            deleteComment(commentId);
          }}
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {}}>Edit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
