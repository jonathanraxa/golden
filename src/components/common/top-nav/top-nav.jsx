import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
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

  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <div className="w-full h-[70px] bg-[rgba(255,255,255,0.87)] flex items-center justify-center">
    <div className="flex items-center justify-between w-[55%] ml-[30px]">
          <AiOutlineSearch
            size={30}
            className="text-[#787878] cursor-pointer"
            onClick={() => setIsSearch(true)}
          />
          <AiOutlineHome
            size={30}
            className="text-[#787878] cursor-pointer"
            onClick={() => goToRoute("/home")}
          />
          <AiOutlineUserSwitch
            size={30}
            className="text-[#787878] cursor-pointer"
            onClick={() => goToRoute("/connections")}
          />
          <BsBriefcase size={30} className="text-[#787878] cursor-pointer" />
          <AiOutlineMessage size={30} className="text-[#787878] cursor-pointer" />
          <AiOutlineBell size={30} className="text-[#787878] cursor-pointer" />
        </div>
      {/* <img
        className="user-logo"
        src={currentUser?.imageLink}
        alt="user"
        onClick={displayPopup}
      /> */}
    </div>
  );
};
