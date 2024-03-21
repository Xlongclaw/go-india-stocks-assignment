import CommingSoon from "@/components/comming-soon";
import React from "react";
import { BiTrendingUp } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Market">
        <BiTrendingUp size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
