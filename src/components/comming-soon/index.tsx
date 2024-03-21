/**
 * @file CommingSoon.tsx
 * @description A component representing a "Coming Soon" section.
 */


import React from "react";
import Skeleton from "./skeleton";

/**
 * Props interface for CommingSoon component.
 */
type PropsType = {
  children: React.JSX.Element; // Child elements
  title: string; // Title for the "Coming Soon" section
};

/**
 * CommingSoon component represents a "Coming Soon" section.
 * @param props - Props for the CommingSoon component.
 * @returns - JSX element representing the CommingSoon component.
 */
const CommingSoon: React.FC<PropsType> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full poppins h-full relative bg-white ">
      {/* Child elements */}
      <div className="relative z-10">{props.children}</div>
      {/* Title */}
      <h3 className="text-3xl relative z-10">{props.title}</h3>
      {/* "Coming Soon" text */}
      <h3 className="text-sm tracking-[5px] relative z-10">COMING SOON</h3>

      {/* Background blured grid */}
      <Skeleton />
    </div>
  );
};

export default CommingSoon;
