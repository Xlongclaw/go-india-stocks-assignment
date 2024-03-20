import React from "react";
import { BiComment, BiHeart } from "react-icons/bi";
import DiscussionWrapper from "./discussion-wrapper";
import SearchBar from "./search-bar";
import DISCUSSION_DATA from "@/constants/DISCUSSION_DATA";
import { GiDiscussion } from "react-icons/gi";

const DiscussionForum = () => {
  return (
    <div className=" pr-0 w-suto relative border-r ml-4 lg:ml-0">
      <div className="flex justify-between items-center py-4 px-6 glass">
        <div className="flex gap-3 items-center">
          <GiDiscussion/>
          <h2 className="font-semibold oswald text-x-accent-base text-base ">
            Discussions Forum
          </h2>
          {/* <h2 className=" text-x-sky-blue poppins text-xs font-medium">
            Dive deep inside the market.
          </h2> */}
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="overflow-y-scroll h-full x-scroll px-5 py-3 pb-12">
      {DISCUSSION_DATA.map((post) => (
        <DiscussionWrapper key={post._id} post={post} />
      ))}

      </div>
    </div>
  );
};

export default DiscussionForum;
