import { motion } from 'framer-motion';
import React from 'react';

const CustomBackButton = ({ onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="text-[#F6D31F] cursor-pointer flex items-center justify-center space-x-2 absolute text-3xl z-30 top-8 left-40"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>
      <span>Back</span>
    </motion.div>
  );
};

export default CustomBackButton;