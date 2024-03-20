"use client";
import React, { useRef } from "react";
import { BiCaretRight } from "react-icons/bi";

type PropsType = {
  handlePress: () => void;
  expanded: boolean;
};
const DrawerToggleBtn: React.FC<PropsType> = ({ handlePress, expanded }) => {
  return (
    <div
      className={`h-full bg-x-light-white w-4 flex flex-col items-center justify-center
     text-black hover:text-black cursor-pointer transition-all hover:bg-x-sky-blue ${
       expanded && "bg-x-sky-blue text-black"
     }`}
      onClick={handlePress}
    >
      <BiCaretRight className={`${expanded && "rotate-180"} transition-all`} />
    </div>
  );
};

export default DrawerToggleBtn;
