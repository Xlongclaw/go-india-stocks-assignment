/**
 * @file OptionsList.tsx
 * @description A component representing a list of options for the drawer.
 */

'use client'; // Importing the client module
import DRAWER_DATA from "@/constants/DRAWER_DATA"; // Importing drawer data from constants
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiCaretRight } from "react-icons/bi";

/**
 * OptionsList component represents a list of options for the drawer.
 * @returns - JSX element representing the OptionsList component.
 */
const OptionsList: React.FC = () => {
  const selected = usePathname();

  return (
    <div className="overflow-y-scroll flex-1">
      {/* Mapping through drawer data */}
      {DRAWER_DATA.map((data) => (
        <Link
          href={data.link}
          key={data.title}
          className={classNames(
            "flex gap-2 rounded-x items-center py-5 px-12 hover:bg-x-accent-light cursor-pointer transition-colors my-1 justify-between",
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
        </Link>
      ))}
    </div>
  );
};

export default OptionsList;
