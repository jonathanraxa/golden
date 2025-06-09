import React, { useState } from "react";
import { onLogout } from "@/api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routes";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
        viewport={false}
        className="group/navigation-menu relative flex h-[70px] w-full !max-w-none flex-1 items-center justify-center bg-[rgba(255,255,255,0.87)]"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <AiOutlineSearch size={30} className="react-icon" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <AiOutlineHome
              size={30}
              className="react-icon"
              onClick={() => navigate(routes.home)}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/docs">Docs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <AiOutlineUserSwitch
                size={30}
                className="cursor-pointer text-[#787878]"
                onClick={() => navigate("/connections")}
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink onClick={handleProfileNav}>
                    Profile
                  </NavigationMenuLink>
                  <NavigationMenuLink onClick={handleLogout}>
                    Logout
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
