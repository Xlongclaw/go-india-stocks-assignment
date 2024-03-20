import React from "react";
import { BiComment, BiDollar, BiHeart } from "react-icons/bi";
import DiscussionWrapper from "./discussion-wrapper";
import SearchBar from "./search-bar";
import DISCUSSION_DATA from "@/constants/DISCUSSION_DATA";
import { GiDiscussion } from "react-icons/gi";

const DiscussionForum = () => {
  return (
    <div className=" pr-0 w-auto relative ml-4 lg:ml-0">
      <div className="flex justify-between items-center h-[72px] px-6 sm:ml-4 ml-3 mr-2 my-3 rounded-xl
       shadow6 bg-white font-medium sm:font-semibold oswald text-x-accent-base text-sm sm:text-base">
        <div className="flex gap-3 items-center w-1/2 xl:w-auto justify-center xl:border-b-0 border-b-2 border-x-accent-base h-full">
          <GiDiscussion/>
          <h2 className=" ">
            Discussions Forum
          </h2>
        </div>
        <div className="h-1/3 w-[1px] bg-x-accent-light/20 block xl:hidden"></div>
        <div className="flex gap-3 items-center w-1/2 xl:hidden justify-center  h-full">
          <BiDollar/>
          <h2 className=" ">
            Market Stories
          </h2>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="overflow-y-scroll h-full x-scroll sm:px-0 px-3 pb-24 rounded-xl">
      {DISCUSSION_DATA.map((post) => (
        <DiscussionWrapper key={post._id} post={post} />
      ))}

      </div>
    </div>
  );
};

export default DiscussionForum;
