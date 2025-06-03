import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { routes } from "@/routes/routes";
export const TopNav = () => {
  return (
    <div className="w-[100%]">
      <NavigationMenu
        viewport={false}
        className="bg-green-200 p-2 max-w-[100%]"
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              to={{
                pathname: routes.home,
              }}
            >
              Home
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
