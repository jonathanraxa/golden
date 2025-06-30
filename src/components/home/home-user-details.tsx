import { routes } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui";
import emptyImage from "@/assets/empty.webp";

export const HomeUserDetails = ({ currentUser }) => {
  const { name, headline, imageLink } = currentUser;

  const navigate = useNavigate();

  return (
    <Card className="relative mt-[7rem] flex min-h-auto flex-col rounded-[7px] border border-[#b7b7b7] bg-[whitesmoke] px-2 pb-2">
      <CardContent className="flex flex-col items-center gap-2 py-10">
        <div className="top-0 right-0 mt-[-100px] mr-2">
          <img
            src={imageLink ? imageLink : emptyImage}
            alt="Profile"
            className="h-20 w-20 cursor-pointer rounded-full border-2 border-white shadow-md"
            onClick={() => navigate(routes.profile)}
          />
        </div>
        <div
          className="cursor-pointer text-lg font-bold text-gray-900"
          onClick={() => navigate(routes.profile)}
        >
          {name}
        </div>
        <div className="text-sm text-gray-600">{headline}</div>
      </CardContent>
    </Card>
  );
};
