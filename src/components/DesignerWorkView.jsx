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
        <p className="text-white w-40 md:w-60 text-center md:text-left">
          Submit and join our team!
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