/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for market-related content.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { BiTrendingUp } from "react-icons/bi"; // Importing the BiTrendingUp icon

/**
 * Page component represents a page with a "Coming Soon" section for market-related content.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for market-related content */}
      <CommingSoon title="Market">
        {/* BiTrendingUp icon */}
        <BiTrendingUp size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
