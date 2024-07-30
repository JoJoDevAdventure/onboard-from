import { motion } from 'framer-motion';
import React from 'react';

const ThankYouView = ({ formData }) => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-[90vh] gap-2"
    >  
      <h1 className="text-[72px] text-[#F6D31F] mt-12 text-center">Thank you!<br/>We'll contact you soon.</h1>
        </motion.div>
);

export default ThankYouView;