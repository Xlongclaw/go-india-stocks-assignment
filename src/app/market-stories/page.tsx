/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for market stories.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { BiDollar } from "react-icons/bi"; // Importing the BiDollar icon

/**
 * Page component represents a page with a "Coming Soon" section for market stories.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for market stories */}
      <CommingSoon title="Market Stories">
        {/* BiDollar icon */}
        <BiDollar size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
