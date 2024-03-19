import React from "react";
import DiscussionForum from "./components/discussion-forum";
import MarketStories from "./components/market-stories";

const Page: React.FC = () => {
  return (
    <div className="flex justify-between flex-1">
      <DiscussionForum />
      <MarketStories />
    </div>
  );
};

export default Page;
