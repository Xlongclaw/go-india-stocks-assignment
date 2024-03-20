import React from "react";
import { BiComment, BiDiamond, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import DiscussionBtn from "./discussion-btn";
import ProfileContainer from "./profile-container";
import { OTHER_USERS_DATA } from "@/constants/USER_DATA";
import MemberTag from "./member-tag";
import Image from "next/image";

type PropsType = {
  post: {
    _id: string;
    postedBy: string;
    postText: string;
    postedAt: string;
    likes: number;
    views: number;
    images: Array<string>;
    comments: Array<{}>;
  };
};

const DiscussionWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className=" pb-0 p-4 rounded-xl bg-white mb-6 shadow6 hover:shadow-non cursor-pointer transition-all">
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
          {props.post.images.map((image) => (
            <Image
              width={500}
              height={500}
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
      <div className="border- border-x-accent-light/20 flex border-t-2 border-dashed border-x-light-white">
        <DiscussionBtn color="RED" title={props.post.likes.toString()}>
          <BiHeart />
        </DiscussionBtn>
        <DiscussionBtn color="BLACK" title={props.post.views.toString()}>
          <BsEye />
        </DiscussionBtn>
        <DiscussionBtn
          color="BLUE"
          title={`${props.post.comments.length} Comments`}
        >
          <BiComment />
        </DiscussionBtn>
        <DiscussionBtn color="BLUE" title="Share">
          <BiShare />
        </DiscussionBtn>
      </div>
    </div>
  );
};

export default DiscussionWrapper;
