/**
 * @file MarketStories.tsx
 * @description A component representing market stories with a list of stories.
 */

import React from "react";
import StoriesWrapper from "./stories-wapper";
import MARKET_STORIES from "@/constants/MARKET_STORIES";

/**
 * MarketStories component represents market stories with a list of stories.
 * @returns - JSX element representing the MarketStories component.
 */
const MarketStories = () => {
  return (
    <div className="px-[6px] w-[30rem] overflow-y-auto x-scroll hidden xl:block">
      {/* Market stories list */}
      {MARKET_STORIES.map((story) => (
        <StoriesWrapper
          key={story.title}
          date={story.date}
          image={story.image}
          shortDes={story.shortDes}
          title={story.title}
        />
      ))}
    </div>
  );
};

export default MarketStories;
