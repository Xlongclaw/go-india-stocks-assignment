import CommingSoon from "@/components/comming-soon";
import React from "react";
import { BiArea } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Sector">
        <BiArea size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
