import { MarketStoriesType } from "@/types";
import React from "react";

type PropsType = MarketStoriesType;

const StoriesWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className="shadow-md rounded-2xl shadow6 overflow-hidden my-4">
      <img src={props.image} alt="" />
      <div className="p-5">
        <h3 className="font-bold text-sm text-x-accent-base">{props.title}</h3>
        <h5 className="text-xs text-x-sky-blue font-bold mt-2">{props.date}</h5>
        <p className="text-xs font-medium text-x-accent-light/80 mt-2">
          {props.shortDes}
        </p>
      </div>
    </div>
  );
};

export default StoriesWrapper;
