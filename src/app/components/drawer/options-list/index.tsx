/**
 * @file OptionsList.tsx
 * @description A component representing a list of options for the drawer.
 */

'use client'; // Importing the client module
import DRAWER_DATA from "@/constants/DRAWER_DATA"; // Importing drawer data from constants
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiCaretRight } from "react-icons/bi";

/**
 * OptionsList component represents a list of options for the drawer.
 * @returns - JSX element representing the OptionsList component.
 */
const OptionsList: React.FC<{expand:()=>void}> = (props) => {
  const selected = usePathname();
  const router = useRouter()

  const handleClick = (link:string)=>{

    // Navigating to another link
    router.push(link);
    
    // Triggered when any drawer option is Pressed so that it can hise the drawer on click
    props.expand()
  }

  return (
    <div className=" w-full">
      {/* Mapping through drawer data */}
      {DRAWER_DATA.map((data) => (
        <button
          onClick={()=>handleClick(data.link)}
          key={data.title}
          className={classNames(
            "flex gap-2 rounded-x w-full items-center py-5 px-12 hover:bg-x-accent-light cursor-pointer transition-colors my-1 justify-between",
            {
              "bg-x-accent-light": selected === data.link,
            }
          )}
        >
          <div className="flex items-center gap-2">
            {/* Option icon */}
            {React.createElement(data.icon)}
            {/* Option title */}
            <h4 className="text-sm text-nowrap">{data.title}</h4>
          </div>
          {/* Subcategories arrow */}
          {data.subCategories.length !== 0 && <BiCaretRight className="ml-6" />}
        </button>
      ))}
    </div>
  );
};

export default OptionsList;
