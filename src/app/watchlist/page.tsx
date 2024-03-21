import CommingSoon from "@/components/comming-soon";
import React from "react";
import { CgList } from "react-icons/cg";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Watchlist">
        <CgList size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
