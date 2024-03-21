import classNames from "classnames";
import React from "react";

interface PropsType {
  children: React.JSX.Element;
  onClick: () => void;
  title: string;
  hideForDesktop:boolean,
  selected:boolean
}

const TabButton: React.FC<PropsType> = (props) => {
  return (
    <button
    onClick={props.onClick}
      className={classNames("flex gap-2 items-center w-1/2 xl:w-auto justify-center h-full",{
        "xl:hidden flex":props.hideForDesktop,
        "flex":!props.hideForDesktop,
        "xl:border-b-0 border-b-2 border-x-accent-base":props.selected
      })}
    >
      <div className="hidden sm:block">
      {props.children}

      </div>
      <h2>{props.title}</h2>
    </button>
  );
};

export default TabButton;
