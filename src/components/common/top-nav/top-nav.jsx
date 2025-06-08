import React, { useState } from "react";
import { onLogout } from "@/api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

export const TopNav = ({ currentUser }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
  };

  const handleProfileNav = () => {
    navigate(routes.profile);
  };

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="w-full">
      <NavigationMenu
        className="group/navigation-menu relative flex-1 w-full !max-w-none h-[70px]
            bg-[rgba(255,255,255,0.87)]
            flex items-center justify-center"
      >
        <NavigationMenuList className="flex w-screen list-none gap-4 items-center justify-between pl-[2rem] pr-[2rem]">
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <AiOutlineSearch
                size={30}
                className="text-[#787878] cursor-pointer"
                onClick={() => setIsSearch(true)}
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <AiOutlineHome
                size={30}
                className="text-[#787878] cursor-pointer"
                onClick={() => goToRoute("/home")}
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <AiOutlineUserSwitch
                size={30}
                className="text-[#787878] cursor-pointer"
                onClick={() => goToRoute("/connections")}
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <BsBriefcase
                size={30}
                className="text-[#787878] cursor-pointer"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <AiOutlineMessage
                size={30}
                className="text-[#787878] cursor-pointer"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              <AiOutlineBell
                size={30}
                className="text-[#787878] cursor-pointer"
              />
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AiOutlineUserSwitch
                size={30}
                className="text-[#787878] cursor-pointer"
                onClick={() => goToRoute("/connections")}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink onClick={handleProfileNav}>
                Profile
              </NavigationMenuLink>
              <NavigationMenuLink onClick={handleLogout}>
                Logout
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
