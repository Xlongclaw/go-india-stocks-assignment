"use client";
import React from "react";
import { motion } from "framer-motion";
import pVar from "./animation/p-var";
import cVar from "./animation/c-var";

const Skeleton = () => {
  return (
    <motion.div
      variants={pVar}
      initial="initial"
      animate="visible"
      className="w-11/12  absolute rounded-2xl p-8 flex gap-3 flex-wrap blur-[10px]"
    >
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-48 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white w-96 h-48 rounded-xl shadow-2xl"/>
      <motion.div variants={cVar} className="bg-white flex-1 h-48 rounded-xl shadow-2xl"/>
    </motion.div>
  );
};

export default Skeleton;
