import CommingSoon from "@/components/comming-soon";
import React from "react";
import { MdEvent } from "react-icons/md";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Events">
        <MdEvent size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
