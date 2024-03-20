"use client";
import React, { useRef } from "react";
import { BiCaretRight } from "react-icons/bi";

type PropsType = {
  handlePress: () => void;
};
const DrawerToggleBtn: React.FC<PropsType> = ({ handlePress }) => {
  return (
    <div
      className="h-full bg-x-light-white w-4 flex flex-col items-center justify-center
     text-x-sky-blue hover:text-black cursor-pointer transition-all hover:bg-x-sky-blue"
      onClick={handlePress}
    >
      <BiCaretRight className="" />
    </div>
  );
};

export default DrawerToggleBtn;
