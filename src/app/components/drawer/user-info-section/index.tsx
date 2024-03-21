/**
 * @file UserInfoSection.tsx
 * @description A component representing the user information section.
 */

import React from "react";
import USER_DATA from "@/constants/USER_DATA";
import { BiNotification } from "react-icons/bi";
import Image from "next/image";

/**
 * UserInfoSection component represents the user information section.
 * @returns - JSX element representing the UserInfoSection component.
 */
const UserInfoSection: React.FC = () => {
  return (
    <div className="m-4 p-4 flex items-center gap-4 hover:bg-x-accent-light rounded-xl cursor-pointer transition-colors">
      {/* User profile image */}
      <Image
        className="w-12 h-12 rounded-full"
        src={USER_DATA.userImage}
        alt=""
        width={500}
        height={500}
      />
      {/* User information */}
      <div>
        <h4 className="font-medium text-nowrap">Hello, {USER_DATA.name}</h4>
        <h4 className="font-medium text-xs text-x-sky-blue">@{USER_DATA.userName}</h4>
      </div>
      {/* Notification icon */}
      <BiNotification className="p-3 hover:bg-x-accent-base rounded-xl" size={44} />
    </div>
  );
};

export default UserInfoSection;
