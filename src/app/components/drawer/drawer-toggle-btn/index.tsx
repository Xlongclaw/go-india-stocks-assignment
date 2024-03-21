/**
 * @file DrawerToggleBtn.tsx
 * @description A component representing a toggle button for the drawer.
 */

"use client"; // Importing the client module
import React from "react";
import { BiCaretRight } from "react-icons/bi";

/**
 * Props interface for DrawerToggleBtn component.
 */
interface PropsType  {
  handlePress: () => void; // Function to handle button press
  expanded: boolean; // Boolean indicating whether the drawer is expanded or not
};

/**
 * DrawerToggleBtn component represents a toggle button for the drawer.
 * @param props - Props for the DrawerToggleBtn component.
 * @returns - JSX element representing the DrawerToggleBtn component.
 */
const DrawerToggleBtn: React.FC<PropsType> = ({ handlePress, expanded }) => {
  return (
    <div
      className={`h-full bg-x-light-white w-4 flex flex-col items-center justify-center text-black hover:text-black cursor-pointer transition-all hover:bg-x-sky-blue ${
        expanded && "bg-x-sky-blue text-black"
      }`}
      onClick={handlePress}
    >
      
      {/* Toggle button icon */}
      <BiCaretRight className={`${expanded && "rotate-180"} transition-all`} />
    </div>
  );
};

export default DrawerToggleBtn;
