import { motion } from 'framer-motion';
import React from 'react';
import Carousel from './Carousel';

const ThankYouView = ({ formData }) => (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-[90vh] gap-2 z-50"
    >  
      <h1 className="md:text-[72px] text-[48px] text-[#F6D31F] text-center">Thank you!<br/>We'll contact you soon.</h1>

      <h2 className="text-[36px] md:text-[72px] text-[#F6D31F] mt-8 text-center">
      Our designers work
      </h2>
      <Carousel />
        </motion.div>
);

export default ThankYouView;