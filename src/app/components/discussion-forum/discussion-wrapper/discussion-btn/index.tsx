import classNames from "classnames";
import React from "react";

type PropsType = {
  children: React.JSX.Element;
  title: string;
  color: "RED" | "BLACK" | "BLUE";
};

const DiscussionBtn: React.FC<PropsType> = (props) => {
  return (
    <div
      className={classNames(
        `flex items-center gap-2 w-1/4 justify-center border-r py-5 border-x-accent-base/30`,
        {
          "hover:bg-red-500 hover:text-white": props.color === "RED",
          "hover:bg-black hover:text-white": props.color === "BLACK",
          "hover:bg-x-sky-blue hover:text-white": props.color === "BLUE",
        }
      )}
    >
      {props.children}
      <h4 className="text-xs poppins font-medium">{props.title}</h4>
    </div>
  );
};

export default DiscussionBtn;
