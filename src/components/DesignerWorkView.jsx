import { motion } from "framer-motion";
import React, { useState } from "react";
import Carousel from "./Carousel";
import CustomButton from "./CustomButton";

const DesignerWorkView = ({ onNext }) => {
  const [designerWork, setDesignerWork] = useState(null);

  const handleFileChange = (e) => {
    setDesignerWork(e.target.files[0]);
  };

  const handleSubmit = () => onNext({ designerWork });

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-[90vh] gap-4"
    >
      <h1 className="text-[36px] md:text-[72px] text-[#F6D31F] mb-4 text-center">
        Our Designers Work
      </h1>
      <Carousel />
      <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-4">
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="bg-[#F6D31F] text-[#9B4191] rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center cursor-pointer"
          onClick={triggerFileInput}
        >
          {designerWork ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          )}
        </motion.div>
        <p className="text-white w-40 md:w-60 text-center md:text-left">
          {designerWork ? designerWork.name : "Upload one of your designs"}
        </p>
        <CustomButton
          onClick={handleSubmit}
          text={"Submit"}
          className="bg-[#F6D31F] py-4 px-6 w-[90%] md:w-[30%] text-[#9B4191] rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default DesignerWorkView;