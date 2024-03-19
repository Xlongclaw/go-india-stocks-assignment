import DRAWER_DATA from "@/constants/DRAWER_DATA";
import classNames from "classnames";
import React from "react";
import { BiCaretRight } from "react-icons/bi";

const OptionsList: React.FC = () => {
  const selected = "/";
  return (
    <div className=" overflow-y-scrol flex-1">
      {DRAWER_DATA.map((data) => (
        <div
          key={data.title}
          className={classNames(
            "flex gap-2 rounded-x items-center py-5 px-12 hover:bg-x-accent-light cursor-pointer transition-colors my-1 justify-between",
            {
              "bg-x-accent-light": selected === data.link,
            }
          )}
        >
          <div className="flex items-center gap-2">
            {React.createElement(data.icon)}
            <h4 className="text-sm">{data.title}</h4>
          </div>
          {data.subCategories.length !== 0 && <BiCaretRight className="ml-6" />}
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
