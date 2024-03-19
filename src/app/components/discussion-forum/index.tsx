import React from "react";
import { BiHeart } from "react-icons/bi";
import DiscussionWrapper from "./discussion-wrapper";

const DiscussionForum = () => {
  return (
    <div className="p-8 w-3/4">
      <h2 className="font-semibold oswald text-x-accent-base text-2xl ">
        DISCUSSIONS
      </h2>
      <h2 className=" text-x-sky-blue poppins text-xs font-medium">
        Dive deep inside the market.
      </h2>
      <DiscussionWrapper/>
    </div>
  );
};

export default DiscussionForum;
