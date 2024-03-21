/**
 * @file Drawer.tsx
 * @description A component representing a drawer with user information and options list.
 */

"use client"; // Importing the client module
import React from "react";
import UserInfoSection from "./user-info-section";
import OptionsList from "./options-list";
import DrawerToggleBtn from "./drawer-toggle-btn";
import classNames from "classnames";
import { motion } from "framer-motion";

/**
 * Drawer component represents a drawer with user information and options list.
 * @returns - JSX element representing the Drawer component.
 */
const Drawer = () => {
  const [expand, setExpand] = React.useState(false);

  return (
    <section
      className={classNames(
        "bg-x-accent-base text-white h-full fixed lg:static z-10 flex"
      )}
    >
      {/* Motion div for animation */}
      <motion.div
        initial={{ width: 0 }}
        animate={
          expand
            ? { width: 320 }
            : { width: 0, opacity: 0, pointerEvents: "none" }
        }
        transition={{ type: "spring", stiffness: 200, damping: 40 }}
        className={classNames("overflow-hidden", {})}
      >

        {/* User information section */}
        <UserInfoSection />

        {/* Options list */}
        <OptionsList />
      </motion.div>

      {/* Drawer toggle button */}
      <DrawerToggleBtn
        expanded={expand}
        handlePress={() => {
          setExpand((x) => !x);
        }}
      />
    </section>
  );
};

export default Drawer;
