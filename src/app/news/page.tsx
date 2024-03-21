import CommingSoon from "@/components/comming-soon";
import React from "react";
import { BiNews } from "react-icons/bi";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="News">
        <BiNews size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
