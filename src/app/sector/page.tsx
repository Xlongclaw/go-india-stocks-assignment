/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for sector-related content.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { BiArea } from "react-icons/bi"; // Importing the BiArea icon

/**
 * Page component represents a page with a "Coming Soon" section for sector-related content.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for sector-related content */}
      <CommingSoon title="Sector">
        {/* BiArea icon */}
        <BiArea size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
