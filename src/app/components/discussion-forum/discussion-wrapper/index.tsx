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
    images: Array<string>;
    comments: Array<{}>;
  };
};

const DiscussionWrapper: React.FC<PropsType> = (props) => {
  return (
    <div className="border border-x-accent-light/20 pb-0 p-6 rounded-3xl mb-8 shadow hover:shadow-none cursor-pointer transition-all">
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
      <div className="flex my-4 justify-between">
        {props.post.images.map((image) => (
          
          <img style={{width:`${98/props.post.images.length}%`,borderRadius:20,objectFit:'cover',maxHeight:160}} src={image} key={image} alt="" />
        ))}
      </div>
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
