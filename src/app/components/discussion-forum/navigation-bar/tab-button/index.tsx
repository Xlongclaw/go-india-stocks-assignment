/**
 * @file TabButton.tsx
 * @description A component representing a button for tabs.
 */

import classNames from "classnames"; // Importing classNames utility
import React from "react";

interface PropsType {
  children: React.JSX.Element; // JSX element representing the content of the button
  onClick: () => void; // Function to be called when the button is clicked
  title: string; // Title of the tab button
  hideForDesktop: boolean; // Indicates whether the button should be hidden for desktop view
  selected: boolean; // Indicates whether the button is selected
}

/**
 * TabButton component represents a button for tabs.
 * @param props - Props for the TabButton component.
 * @returns - JSX element representing the TabButton component.
 */
const TabButton: React.FC<PropsType> = (props) => {
  return (
    <button
      onClick={props.onClick} // Handling click event
      className={classNames("flex gap-2 items-center w-1/2 xl:w-auto justify-center h-full", {
        // Conditionally applying CSS classes
        "xl:hidden flex": props.hideForDesktop, // Hide for desktop view
        "flex": !props.hideForDesktop, // Show for desktop view
        "xl:border-b-0 border-b-2 border-x-accent-base": props.selected, // Apply border when selected
      })}
    >
      <div className="hidden sm:block">
        {/* Render children when not hidden for desktop */}
        {props.children}
      </div>
      <h2>{props.title}</h2> {/* Render title */}
    </button>
  );
};

export default TabButton;
