/**
 * @file DiscussionWrapper.tsx
 * @description A component for displaying discussion items with user data and interaction buttons.
 */

"use client"; // Importing the client module
import React from "react";
import ProfileContainer from "./profile-container";
import { OTHER_USERS_DATA } from "@/constants/USER_DATA"; // Importing constant user data
import MemberTag from "./member-tag";
import Image from "next/image";
import { motion } from "framer-motion";
import { PostType } from "@/types";
import ButtonGroup from "./button-group";

/**
 * Props interface for DiscussionWrapper component.
 */
type PropsType = {
  post: PostType;
};

/**
 * DiscussionWrapper component displays discussion items with user data and interaction buttons.
 * @param props - Props for the DiscussionWrapper component.
 * @returns - JSX element representing the DiscussionWrapper component.
 */
const DiscussionWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className="pb-0 p-4 rounded-xl bg-white mb-3 sm:ml-4 ml-0 sm:mr-2 shadow6 hover:shadow-non cursor-pointer">
      {/* Mapping through other users data */}
      {OTHER_USERS_DATA.map((userData) => {
        if (userData.userName === props.post.postedBy)
          return (
            <div
              key={userData.userName}
              className="flex font-bold poppins items-center justify-between border-b-2 border-x-light-white border-dashed pb-4"
            >
              <ProfileContainer
                des={userData.des}
                image={userData.userImage}
                name={userData.name}
                userName={userData.userName}
              />
              <div className="flex flex-col xs:items-end items-center gap-2 ">
                <MemberTag tag={userData.status} />
                <h4 className="xs:text-xs text-[10px] font-medium text-x-accent-base/80">
                  {props.post.postedAt}
                </h4>
              </div>
            </div>
          );
      })}
      <div className="flex md:flex-row flex-col items-center">
        <p className="sm:text-xl xs:text-base text-sm text-x-accent-base my-4 poppins font-bold transition-all mr-4">
          {props.post.postText}
        </p>
        <div className="flex sm:my-4 mb-2 w-full justify-between">
          {/* Mapping through post images */}
          {props.post.images.map((image) => (
            <Image
              width={300}
              height={160}
              style={{
                width: `${98 / props.post.images.length}%`,
                borderRadius: 20,
                objectFit: "cover",
                maxHeight: 160,
              }}
              src={image}
              key={image}
              alt=""
            />
          ))}
        </div>
      </div>

      {/* Button group renders 4 interation button - like, comment, views, share */}
      <ButtonGroup post={props.post} />
    </div>
  );
};

export default DiscussionWrapper;
