import React from "react";
import { BiComment, BiDiamond, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import DiscussionBtn from "./discussion-btn";
import ProfileContainer from "./profile-container";
import { OTHER_USERS_DATA } from "@/constants/USER_DATA";
import MemberTag from "./member-tag";

type PropsType = {
  post: {
    _id: string;
    postedBy: string;
    postText: string;
    postedAt: string;
    likes: number;
    views: number;
    comments: Array<{}>;
  };
};

const DiscussionWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className="border border-x-accent-light/20 pb-0 p-6 rounded-3xl my-4 shadow hover:shadow-none cursor-pointer transition-all">
      {OTHER_USERS_DATA.map((userData) => {
        if (userData.userName === props.post.postedBy)
          return (
            <div className="flex font-bold poppins items-center justify-between">
              <ProfileContainer
                des={userData.des}
                image={userData.userImage}
                name={userData.name}
                userName={userData.userName}
              />
              <div className="flex flex-col items-end gap-2">
                <MemberTag tag={userData.status} />
                <h4 className="text-xs font-medium text-x-accent-base/80">
                  {props.post.postedAt}
                </h4>
              </div>
            </div>
          );
      })}
      <p className="text-2xl text-x-accent-base my-4 poppins font-bold ">
        {props.post.postText}
      </p>
      <div className="border-t border-x-accent-light/20 flex border-l">
        <DiscussionBtn
          color="RED"
          title={props.post.likes.toString()}
          children={<BiHeart />}
        />
        <DiscussionBtn
          color="BLACK"
          title={props.post.views.toString()}
          children={<BsEye />}
        />
        <DiscussionBtn
          color="BLUE"
          title={`${props.post.comments.length} Comments`}
          children={<BiComment />}
        />
        <DiscussionBtn color="BLUE" title="Share" children={<BiShare />} />
      </div>
    </div>
  );
};

export default DiscussionWrapper;
