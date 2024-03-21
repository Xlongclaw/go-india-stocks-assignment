/**
 * @file NavigationBar.tsx
 * @description A component representing the navigation bar for the discussion forum.
 */

"use client";
import React from "react";
import { BiDollar } from "react-icons/bi";
import { GiDiscussion } from "react-icons/gi";
import SearchBar from "./search-bar";
import TabButton from "./tab-button";

/**
 * NavigationBar component represents the navigation bar for the discussion forum.
 * @returns - JSX element representing the NavigationBar component.
 */
const NavigationBar: React.FC<{
  currentSelection: (selected: "discussions" | "stories") => void;
  selected: "discussions" | "stories";
}> = (props) => {
  return (
    <div
      className="flex justify-between items-center h-[72px] px-6 sm:ml-4 ml-3 mr-3 sm:mr-2 my-3 rounded-xl 
    shadow6 bg-white font-semibold text-x-accent-base text-xs sm:text-base"
    >
      {/* Discussion Forum button */}
      <TabButton
        selected={props.selected === "discussions"}
        hideForDesktop={false}
        onClick={() => {
          props.currentSelection("discussions");
        }}
        title="Discussion Forum"
      >
        <GiDiscussion />
      </TabButton>

      {/* Divider for mobile view */}
      <div className="h-1/3 w-[1px] bg-x-accent-light/20 block xl:hidden"></div>

      {/* Market Stories button for mobile view */}
      <TabButton
        selected={props.selected === "stories"}
        hideForDesktop
        onClick={() => {
          props.currentSelection("stories");
        }}
        title="Market Stories"
      >
        <BiDollar />
      </TabButton>

      {/* SearchBar component */}
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavigationBar;
