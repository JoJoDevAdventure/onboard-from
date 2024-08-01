import { motion } from "framer-motion";
import React from "react";
import CustomButton from "./CustomButton";

const IntroView = ({ onNext }) => (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "-100%" }}
    className="flex flex-col items-center justify-top mt-32 md:mt-10 bg-transparent h-[90vh]"
  >
    <video
      src="your-video-url.mp4"
      className="w-full max-w-[90%] md:max-w-[70%] mb-10"
      controls
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

export default IntroView;