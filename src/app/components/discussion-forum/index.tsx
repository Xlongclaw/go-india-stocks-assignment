/**
 * @file DiscussionForum.tsx
 * @description A component representing a discussion forum layout.
 */

import React from "react";
import DiscussionContainer from "./discussion-container";
import NavigationBar from "./navigation-bar";

/**
 * DiscussionForum component represents a discussion forum layout.
 * @returns - JSX element representing the DiscussionForum component.
 */
const DiscussionForum = () => {
  return (
    <div className="pr-0 w-auto relative ml-4 lg:ml-0">
      {/* Navigation bar */}
      <NavigationBar />
      {/* Discussion container */}
      <DiscussionContainer />
    </div>
  );
};

export default DiscussionForum;
