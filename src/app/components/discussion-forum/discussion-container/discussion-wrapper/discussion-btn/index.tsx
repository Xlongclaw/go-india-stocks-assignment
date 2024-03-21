/**
 * @file DiscussionBtn.tsx
 * @description A component representing a discussion button with different styles based on the color.
 */

import classNames from "classnames";
import React from "react";

/**
 * Props interface for DiscussionBtn component.
 */
type PropsType = {
  children: React.JSX.Element; // Button icon or content
  title: string; // Button title
  color: "RED" | "BLACK" | "BLUE"; // Button color
};

/**
 * DiscussionBtn component represents a discussion button with different styles based on the color.
 * @param props - Props for the DiscussionBtn component.
 * @returns - JSX element representing the DiscussionBtn component.
 */
const DiscussionBtn: React.FC<PropsType> = (props) => {
  return (
    <div
      className={classNames(
        `flex items-center gap-2 w-1/4 justify-center border-r2 rounded-full py-3 my-2 border-x-accent-base/10 transition-colors`,
        {
          "hover:bg-red-500 hover:text-white": props.color === "RED",
          "hover:bg-black hover:text-white": props.color === "BLACK",
          "hover:bg-x-sky-blue hover:text-white": props.color === "BLUE",
        }
      )}
    >
      {/* Button content */}
      {props.children}
      {/* Button title */}
      <h4 className="text-xs poppins font-medium md:block hidden">{props.title}</h4>
    </div>
  );
};

export default DiscussionBtn;
