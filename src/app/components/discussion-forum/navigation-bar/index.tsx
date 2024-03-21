/**
 * @file NavigationBar.tsx
 * @description A component representing the navigation bar for the discussion forum.
 */

import React from "react";
import { BiDollar } from "react-icons/bi";
import { GiDiscussion } from "react-icons/gi";
import SearchBar from "./search-bar";

/**
 * NavigationBar component represents the navigation bar for the discussion forum.
 * @returns - JSX element representing the NavigationBar component.
 */
const NavigationBar = () => {
  return (
    <div
      className="flex justify-between items-center h-[72px] px-6 sm:ml-4 ml-3 mr-2 my-3 rounded-xl 
    shadow6 bg-white font-medium sm:font-semibold oswald text-x-accent-base text-sm sm:text-base"
    >
      {/* Discussion Forum section */}
      <div
        className="flex gap-3 items-center w-1/2 xl:w-auto justify-center xl:border-b-0 border-b-2
       border-x-accent-base h-full"
      >
        <GiDiscussion />
        <h2>Discussions Forum</h2>
      </div>

      {/* Divider for mobile view */}
      <div className="h-1/3 w-[1px] bg-x-accent-light/20 block xl:hidden"></div>

      {/* Market Stories section for mobile view */}
      <div className="flex gap-3 items-center w-1/2 xl:hidden justify-center h-full">
        <BiDollar />
        <h2>Market Stories</h2>
      </div>

      {/* SearchBar component */}
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavigationBar;
