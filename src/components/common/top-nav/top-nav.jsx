import React, { useState } from "react";
import { onLogout } from "@/api/AuthAPI";
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
import { routes } from "@/routes/routes";
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
  const handleLogout = () => {
    onLogout();
  };
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="w-full">
      <NavigationMenu className=" h-[70px] bg-[rgba(255,255,255,0.87)] flex items-center justify-center">
        <NavigationMenuList className="flex items-center justify-between w-[55%] ml-[30px]">
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
              <NavigationMenuLink onClick={handleLogout}>
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
