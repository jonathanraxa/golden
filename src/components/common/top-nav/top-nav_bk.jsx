import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faUser,
  faBriefcase,
  faComment,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export const TopNav = () => {
  return (
    <NavigationMenu
      viewport={false}
      className="w-full h-[70px] bg-[rgba(255,255,255,0.87)] flex items-center"
    >
      <NavigationMenuList className="flex justify-between">
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faComment} />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to={{
              pathname: routes.home,
            }}
          >
            <FontAwesomeIcon icon={faBell} />
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
