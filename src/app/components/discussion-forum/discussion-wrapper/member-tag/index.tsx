import classNames from "classnames";
import React from "react";

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
      <div className="w-3 h-3 rounded-full bg-white xs:block hidden"></div>
      <h3 className="text-white text-[10px] mt-[1px] font-medium flex items-center">
        {props.tag}
      </h3>
    </div>
  );
};

export default MemberTag;
