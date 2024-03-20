import ImageCarousel from "@/components/image-carousel";
import React from "react";
import StoriesWrapper from "./stories-wapper";
import MARKET_STORIES from "@/constants/MARKET_STORIES";

const MarketStories = () => {
  return (
    <div className="p-4 w-1/4 overflow-y-auto x-scroll hidden xl:block">
      {/* <h3 className="font-bold text-x-accent-base oswald text-sm my-4 text-center">
        MARKET STORIES
      </h3> */}
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
