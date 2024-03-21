/**
 * @file DiscussionForum.tsx
 * @description A component representing a discussion forum layout.
 */

'use client'
import React from "react";
import DiscussionContainer from "./discussion-container";
import NavigationBar from "./navigation-bar";
import StoriesContainer from "./stories-container";

/**
 * DiscussionForum component represents a discussion forum layout.
 * @returns - JSX element representing the DiscussionForum component.
 */
const DiscussionForum = () => {
  const [selected, setSelected] = React.useState<"discussions" | "stories">(
    "discussions"
  );
  return (
    <div className="pr-0 w-auto relative ml-4 lg:ml-0">
      {/* Navigation bar */}
      <NavigationBar
      selected ={selected}
        currentSelection={(option) => {
          setSelected(option);
        }}
      />
      {selected === "discussions" ? <DiscussionContainer /> : <StoriesContainer/>}
    </div>
  );
};

export default DiscussionForum;
