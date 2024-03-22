/**
 * @file DiscussionContainer.tsx
 * @description A container component for displaying discussion items.
 */

import DISCUSSION_DATA from '@/constants/DISCUSSION_DATA'; // Importing constant discussion data
import React from 'react';
import DiscussionWrapper from './discussion-wrapper';

/**
 * DiscussionContainer component is a container for displaying discussion items.
 * @returns - JSX element representing the DiscussionContainer component.
 */
const DiscussionContainer = () => {
  return (
    <div className="overflow-y-scroll h-full x-scroll sm:px-0 px-3 pb-24 rounded-xl">
      
      {/* Mapping through discussion data */}
      {DISCUSSION_DATA.map((post) => (
        <DiscussionWrapper key={post._id} post={post} />
      ))}
    </div>
  );
};

export default DiscussionContainer;
