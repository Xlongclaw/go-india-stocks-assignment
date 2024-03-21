/**
 * @file Page.tsx
 * @description A component representing the main page layout.
 */

import React from "react";
import DiscussionForum from "./components/discussion-forum";
import MarketStories from "./components/market-stories";

/**
 * Page component represents the main page layout.
 * @returns - JSX element representing the Page component.
 */
const Page: React.FC = () => {
  return (
    <div className="flex justify-between flex-1">
      {/* Discussion forum component */}
      <DiscussionForum />
      {/* Market stories component */}
      <MarketStories />
    </div>
  );
};

export default Page;
