import React from "react";
import { BiComment, BiDiamond, BiHeart, BiShare } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import BUTTON_DATA from "./BUTTON_DATA";

const DiscussionWrapper = () => {
  return (
    <div className="border border-x-accent-light/20 pb-0 p-6 rounded-3xl my-4 shadow hover:shadow-none cursor-pointer transition-all">
      <div className="flex font-bold poppins items-center justify-between">
        <div className="gap-4 flex items-center">
          <img
            className="w-14 rounded-2xl"
            src="https://res.cloudinary.com/dlxpf7d8c/image/upload/v1710854361/gje3vo4nceqb9gfpedtj.png"
            alt=""
          />
          <div>
            <h3 className="text-x-accent-light text-sm poppins">
              Madhuresh Verma
            </h3>
            <h3 className="text-x-sky-blue text-[10px] font-medium">
              @madhureshverma790
            </h3>
            <h3 className="text-x-accent-base text-[10px] font-medium flex items-center">
              Stock Market Super Giant
            </h3>
          </div>

          {/* <button className='font-medium px-5 py-4 rounded-lg border border-x-accent-light/40 text-xs text-x-accent-light'>Follow</button> */}
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center bg-violet-500 py-1 px-2 gap-2 rounded-full">
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <h3 className="text-white text-[10px] mt-[1px] font-medium flex items-center">
              Diamond
            </h3>
          </div>
          <h4 className="text-xs font-medium text-x-accent-base/80">
            3 hours ago
          </h4>
        </div>
      </div>
      <p className="text-2xl text-x-accent-base my-4 poppins font-bold ">
        The way banks nifty future dropped and current writing...I took a bet on
        banks nifty shorts with big quantity....if its a trap then no guilt.
      </p>
      <div className="border-t border-x-accent-light/20 flex border-l">
        {BUTTON_DATA.map((button) => (
          <div className="flex items-center gap-2 w-1/4 justify-center border-r  py-5 border-x-accent-base/30 hover:bg-x-sky-blue">
            {React.createElement(button.icon)}
            <h4 className="text-xs poppins font-medium">{button.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionWrapper;
