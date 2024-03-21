import CommingSoon from "@/components/comming-soon";
import React from "react";
import { MdSentimentSatisfied } from "react-icons/md";

const Page = () => {
  return (
    <div className="w-full">
      <CommingSoon title="Sentiments">
        <MdSentimentSatisfied size={32}/>
      </CommingSoon>
    </div>
  );
};

export default Page;
