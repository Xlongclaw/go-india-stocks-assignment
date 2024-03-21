/**
 * @file Page.tsx
 * @description A component representing a page with a "Coming Soon" section for events.
 */

import CommingSoon from "@/components/comming-soon"; // Importing the CommingSoon component
import React from "react";
import { MdEvent } from "react-icons/md"; // Importing the MdEvent icon

/**
 * Page component represents a page with a "Coming Soon" section for events.
 * @returns - JSX element representing the Page component.
 */
const Page = () => {
  return (
    <div className="w-full">
      {/* "Coming Soon" section for events */}
      <CommingSoon title="Events">
        {/* MdEvent icon */}
        <MdEvent size={32} />
      </CommingSoon>
    </div>
  );
};

export default Page;
