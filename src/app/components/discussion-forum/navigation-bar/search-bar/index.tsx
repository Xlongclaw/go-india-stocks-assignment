/**
 * @file SearchBar.tsx
 * @description A component representing the search bar for discussions.
 */

import React from "react";
import { BiSearch } from "react-icons/bi";

/**
 * SearchBar component represents the search bar for discussions.
 * @returns - JSX element representing the SearchBar component.
 */
const SearchBar = () => {
  return (
    <div className="xl:flex items-center gap-2 border-2 border-x-sky-blue/50 px-4 rounded-xl hidden text-x-sky-blue">
      {/* Search icon */}
      <BiSearch />
      {/* Search input field */}
      <input
        type="text"
        className="bg-transparent py-3 text-xs font-normal focus:outline-none placeholder:text-x-sky-blue placeholder:font-semibold"
        placeholder="Search Discussions"
      />
    </div>
  );
};

export default SearchBar;
