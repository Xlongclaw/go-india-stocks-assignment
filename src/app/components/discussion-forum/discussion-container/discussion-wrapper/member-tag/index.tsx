/**
 * @file MemberTag.tsx
 * @description A component representing a member tag with different styles based on the tag type.
 */

import classNames from "classnames";
import React from "react";

/**
 * Props interface for MemberTag component.
 */
type PropsType = {
  tag:
    | "Legend"
    | "Diamond"
    | "Platinum"
    | "Gold"
    | "Silver"
    | "Bronze"
    | "Rookie";
};

/**
 * MemberTag component represents a member tag with different styles based on the tag type.
 * @param props - Props for the MemberTag component.
 * @returns - JSX element representing the MemberTag component.
 */
const MemberTag: React.FC<PropsType> = (props) => {
  return (
    <div
      className={classNames(
        "flex items-center py-1 px-2 gap-2 rounded-full",
        {
          "bg-teal-600": props.tag === "Legend",
          "bg-violet-500": props.tag === "Diamond",
          "bg-zinc-600": props.tag === "Platinum",
          "bg-yellow-600": props.tag === "Gold",
          "bg-neutral-700": props.tag === "Silver",
          "bg-yellow-800": props.tag === "Bronze",
          "bg-slate-950": props.tag === "Rookie",
        }
      )}
    >
      {/* Tag icon */}
      <div className="w-3 h-3 rounded-full bg-white xs:block hidden"></div>
      {/* Tag text */}
      <h3 className="text-white text-[10px] mt-[1px] font-medium flex items-center">
        {props.tag}
      </h3>
    </div>
  );
};

export default MemberTag;
