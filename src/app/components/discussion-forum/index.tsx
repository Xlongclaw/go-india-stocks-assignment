import React from "react";
import { BiHeart } from "react-icons/bi";
import DiscussionWrapper from "./discussion-wrapper";
import SearchBar from "./search-bar";
import DISCUSSION_DATA from "@/constants/DISCUSSION_DATA";

const DiscussionForum = () => {
  return (
    <div className="p-8 w-3/4">
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
      {DISCUSSION_DATA.map((post) => (
        <DiscussionWrapper key={post._id} post={post} />
      ))}
    </div>
  );
};

export default DiscussionForum;
