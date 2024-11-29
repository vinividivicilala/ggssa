import React from 'react'
import { MyBlogLogo } from './Icons'
import { motion } from "framer-motion";

export const bouncingLogo = {
  initial: {
    scale: 1,
    y: 0, // Initial y position
  },
  animate: {
    scale: [1, 1.2, 1], // Animate scale to create squash and stretch effect
    y: [0, -25, 0], // Animate y position to create bounce effect
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut", // You can adjust the easing function if needed
    },
  },
};




const Loader = () => {
  return (
    <motion.div className='flex justify-center lg:py-40 py-20 min-h-screen' initial="initial" animate="animate" variants={bouncingLogo}>
      <MyBlogLogo className="h-64" />
    </motion.div>
  )
}

export default Loader