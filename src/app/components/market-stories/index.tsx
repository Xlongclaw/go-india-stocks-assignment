import ImageCarousel from "@/components/image-carousel";
import React from "react";
import StoriesWrapper from "./stories-wapper";

const MarketStories = () => {
  return (
    <div className="p-4 w-1/4 overflow-y-auto">
      <h3 className="font-bold text-x-accent-base oswald text-sm my-4 text-center">
        MARKET STORIES
      </h3>

      <StoriesWrapper />
      <StoriesWrapper />
    </div>
  );
};

export default MarketStories;
