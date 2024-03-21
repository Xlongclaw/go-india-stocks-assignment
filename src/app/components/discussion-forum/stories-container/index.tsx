import MARKET_STORIES from "@/constants/MARKET_STORIES";
import React from "react";
import StoriesWrapper from "../../market-stories/stories-wapper";

const StoriesContainer = () => {
  return (
    <div className="px-3 overflow-y-scroll h-full flex flex-wrap gap-3 pb-32">
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

export default StoriesContainer;
