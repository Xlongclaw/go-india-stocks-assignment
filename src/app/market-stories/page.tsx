import CommingSoon from "@/components/comming-soon";
import React from "react";
import { BiDollar } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Market Stories">
        <BiDollar size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
