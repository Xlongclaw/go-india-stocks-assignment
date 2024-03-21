/**
 * @file ProfileContainer.tsx
 * @description A component representing a container for user profile information.
 */

import Image from "next/image";
import React from "react";

/**
 * Props interface for ProfileContainer component.
 */
type PropsType = {
  image: string; // User profile image URL
  name: string; // User's name
  userName: string; // User's username
  des: string; // User's description
};

/**
 * ProfileContainer component represents a container for user profile information.
 * @param props - Props for the ProfileContainer component.
 * @returns - JSX element representing the ProfileContainer component.
 */
const ProfileContainer: React.FC<PropsType> = (props) => {
  return (
    <div className="gap-4 flex items-center">
      {/* User profile image */}
      <Image
        className="xs:w-14 xs:h-14 w-10 h-10 object-cover rounded-2xl"
        width={500}
        height={500}
        src={props.image}
        alt=""
      />
      {/* User profile information */}
      <div>
        <h3 className="text-x-accent-light text-xs sm:text-sm poppins">{props.name}</h3>
        <h3 className="text-x-sky-blue text-[10px] font-medium">
          @{props.userName}
        </h3>
        <h3 className="text-x-accent-base text-[10px] font-medium flex items-center">
          {props.des}
        </h3>
      </div>
      {/* Follow button */}
      {/* Uncomment the following button code if needed */}
      {/* <button className='font-medium px-5 py-4 rounded-lg border border-x-accent-light/40 text-xs text-x-accent-light'>Follow</button> */}
    </div>
  );
};

export default ProfileContainer;
