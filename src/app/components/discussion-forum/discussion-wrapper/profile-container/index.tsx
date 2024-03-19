import React from "react";

type PropsType = {
  image: string;
  name: string;
  userName: string;
  des: string;
};

const ProfileContainer: React.FC<PropsType> = (props) => {
  return (
    <div className="gap-4 flex items-center">
      <img className="w-14 h-14 object-cover rounded-2xl" src={props.image} alt="" />
      <div>
        <h3 className="text-x-accent-light text-sm poppins">{props.name}</h3>
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
