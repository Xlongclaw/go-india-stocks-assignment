"use client";
import React, { LegacyRef, useRef } from "react";
import UserInfoSection from "./user-info-section";
import OptionsList from "./options-list";
import DrawerToggleBtn from "./drawer-toggle-btn";
import classNames from "classnames";
import { motion } from "framer-motion";

const Drawer = () => {
  const ref = React.createRef<HTMLDivElement>();
  const [expand, setExpand] = React.useState(true);
  return (
    <section
      ref={ref}
      className={classNames("bg-x-accent-base text-white h-full fixed lg:static z-10 flex")}
    >
      <motion.div
      initial={{width:0}}
      animate={expand ? {width:320} :{width:0,opacity:0 ,pointerEvents:'none'}}
      transition={{type:'spring',stiffness:200,damping:40}}
        className={classNames(" overflow-hidden",{})}
      >
        <UserInfoSection />
        <OptionsList />
      </motion.div>
      <DrawerToggleBtn
        handlePress={() => {
          setExpand((x) => !x);
        }}
      />
    </section>
  );
};

export default Drawer;


// {
//   "w-80": expand,
//   "w-0 opacity-0 pointer-events-none": !expand,
// }