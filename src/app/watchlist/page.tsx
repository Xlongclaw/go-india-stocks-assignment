/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for watchlist-related content.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { CgList } from "react-icons/cg"; // Importing the CgList icon

/**
 * Page component represents a page with a "Coming Soon" section for watchlist-related content.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for watchlist-related content */}
      <CommingSoon title="Watchlist">
        {/* CgList icon */}
        <CgList size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
