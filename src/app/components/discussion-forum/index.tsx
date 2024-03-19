import React from "react";
import { BiHeart } from "react-icons/bi";
import DiscussionWrapper from "./discussion-wrapper";
import SearchBar from "./search-bar";
import DISCUSSION_DATA from "@/constants/DISCUSSION_DATA";

const DiscussionForum = () => {
  return (
    <div className="py-8 pl-6 pr-4 w-3/4">
      <div className=" flex justify-between">
        <div>
          <h2 className="font-semibold oswald text-x-accent-base text-2xl ">
            DISCUSSIONS
          </h2>
          <h2 className=" text-x-sky-blue poppins text-xs font-medium">
            Dive deep inside the market.
          </h2>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="overflow-y-scroll h-full x-scroll pr-3 mt-8 pb-12">
      {DISCUSSION_DATA.map((post) => (
        <DiscussionWrapper key={post._id} post={post} />
      ))}

      </div>
    </div>
  );
};

export default DiscussionForum;
