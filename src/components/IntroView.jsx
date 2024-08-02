import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CustomButton from "./CustomButton";

const IntroView = ({ onNext }) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []); // Empty dependency array ensures this runs only once

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top mt-2 md:mt-2 bg-transparent h-full pb-10"
    >
      <h1 className="text-[36px] md:text-[72px] text-[#F6D31F] mb-4 text-center">
        Join us!
      </h1>
      <p className="px-8 md:px-64 mb-10 text-white text-xl md:text-3xl text-center">
        We've got something truly exciting for all you creatives out there!
        Imagine designing unique chocolate bar wrappers that people can buy, all
        while earning commission on every sale. Join us and turn your artistic
        passion into profit!
      </p>
      <video
        src="Plonkkaa.mp4"
        className="w-full max-w-[90%] md:max-w-[70%] mb-10"
        controls
        autoplay
      />
      <CustomButton
        text="Get Started!"
        onClick={() => onNext()}
        className="bg-[#F6D31F] py-4 px-4 w-[70%] md:w-[30%] text-[#9B4191] rounded-full"
      >
        Get Started
      </CustomButton>
    </motion.div>
  );
};

export default IntroView;