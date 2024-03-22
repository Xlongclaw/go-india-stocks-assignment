/**
 * @file StoriesWrapper.tsx
 * @description A component representing a wrapper for market stories.
 */

import { MarketStoriesType } from "@/types"; // Importing MarketStoriesType from types
import Image from "next/image";
import React from "react";

/**
 * StoriesWrapper component represents a wrapper for market stories.
 * @param props - Props for the StoriesWrapper component.
 * @returns - JSX element representing the StoriesWrapper component.
 */
const StoriesWrapper: React.FC<MarketStoriesType> = (props) => {
  return (
    <div className="bg-white rounded-2xl shadow6 poppins overflow-hidden xl:my-4 my-2 xl:w-full lg:w-[31.7%] sm:w-[48%] w-full cursor-pointer">
      {/* Story image */}
      <Image src={props.image} width={500} height={500} alt="" />
      <div className="pt-3 p-5">
        {/* Story title */}
        <h3 className="font-semibold leading-5 text-base text-x-accent-base">{props.title}</h3>
        {/* Story date */}
        <h5 className="text-xs text-x-sky-blue font-medium mb-2">{props.date}</h5>
        {/* Story short description */}
        <p className="text-xs font-medium text-x-accent-light/80 mt-2">
          {props.shortDes}
        </p>
      </div>
    </div>
  );
};

export default StoriesWrapper;
