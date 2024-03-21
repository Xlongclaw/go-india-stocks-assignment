/**
 * @file ButtonGroup.tsx
 * @description A component for displaying interaction buttons in a group.
 */

import React from 'react';
import { BiHeart, BiComment, BiShare } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';
import DiscussionBtn from '../discussion-btn';
import { PostType } from '@/types';

/**
 * Props interface for ButtonGroup component.
 */
interface PropsType {
  post: PostType; // Post data
}

/**
 * ButtonGroup component displays interaction buttons in a group.
 * @param props - Props for the ButtonGroup component.
 * @returns - JSX element representing the ButtonGroup component.
 */
const ButtonGroup: React.FC<PropsType> = (props) => {
  return (
    <div className="border- border-x-accent-light/20 flex border-t-2 border-dashed border-x-light-white">
      {/* Interaction buttons */}

      {/* Like Button */}
      <DiscussionBtn color="RED" title={props.post.likes.toString()}><BiHeart /></DiscussionBtn>

      {/* Views Button */}
      <DiscussionBtn color="BLACK" title={props.post.views.toString()}><BsEye /></DiscussionBtn>

      {/* Comment Button */}
      <DiscussionBtn color="BLUE" title={`${props.post.comments.length} Comments`}><BiComment /></DiscussionBtn>

      {/* Share Button */}
      <DiscussionBtn color="BLUE" title="Share"><BiShare /></DiscussionBtn>
    </div>
  );
};

export default ButtonGroup;
