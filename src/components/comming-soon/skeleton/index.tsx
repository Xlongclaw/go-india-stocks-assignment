/**
 * @file Skeleton.tsx
 * @description A component representing a skeleton loading animation.
 */

"use client"; // Importing the client module
import React from "react";
import { motion } from "framer-motion";
import pVar from "./animation/p-var"; // Importing parent animation variants
import cVar from "./animation/c-var"; // Importing child animation variants

/**
 * Skeleton component represents a skeleton loading animation.
 * @returns - JSX element representing the Skeleton component.
 */
const Skeleton = () => {
  return (
    <motion.div
      variants={pVar} // Parent animation variants
      initial="initial"
      animate="visible"
      className="w-11/12 absolute rounded-2xl p-8 flex gap-3 flex-wrap blur-[10px]"
    >
      {/* Child skeleton elements */}
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl" />
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl" />
    </motion.div>
  );
};

export default Skeleton;
