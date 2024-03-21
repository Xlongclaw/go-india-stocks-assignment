/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for news.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { BiNews } from "react-icons/bi"; // Importing the BiNews icon

/**
 * Page component represents a page with a "Coming Soon" section for news.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for news */}
      <CommingSoon title="News">
        {/* BiNews icon */}
        <BiNews size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
