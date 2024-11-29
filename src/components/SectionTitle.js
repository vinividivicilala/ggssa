import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title, className = "", variants }) => {
  return (
    <motion.div
      className={`flex items-center  ${className}`}
      initial="initial"
      variants={variants}
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="mb-10 lg:text-5xl lg:mx-0 mx-auto text-3xl font-bold">
        {title}
        <span className="text-orange-400 text-7xl"> .</span>
      </div>
      {/* <hr className="mb-10 bg-red-700 h-2 w-full mt-5 ml-6" /> */}
    </motion.div>
  );
};

export default SectionTitle;
