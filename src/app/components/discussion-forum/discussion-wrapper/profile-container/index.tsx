import Image from "next/image";
import React from "react";

type PropsType = {
  image: string;
  name: string;
  userName: string;
  des: string;
};

const ProfileContainer: React.FC<PropsType> = (props) => {
  return (
    <div className="gap-4 flex items-center ">
      <Image className="xs:w-14 xs:h-14 w-10 h-10 object-cover rounded-2xl" width={500}
            height={500} src={props.image} alt="" />
      <div>
        <h3 className="text-x-accent-light text-xs sm:text-sm poppins">{props.name}</h3>
        <h3 className="text-x-sky-blue text-[10px] font-medium">
          @{props.userName}
        </h3>
        <h3 className="text-x-accent-base text-[10px] font-medium flex items-center">
          {props.des}
        </h3>
      </div>
      {/* <button className='font-medium px-5 py-4 rounded-lg border border-x-accent-light/40 text-xs text-x-accent-light'>Follow</button> */}
    </div>
  );
};

export default ProfileContainer;
