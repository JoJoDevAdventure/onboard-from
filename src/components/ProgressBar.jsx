import { motion } from "framer-motion";
import React from "react";

const ProgressBar = ({ step, onStepChange }) => {
  const steps = [
    { id: 1, image: "./i1.png" },
    { id: 2, image: "./i2.png" },
    { id: 3, image: "./i3.png" },
    { id: 4, image: "./i4.png" },
    { id: 5, image: "./i5.png" },
  ];

  return (
    <div
      className={`${
        step === 0 ? "hidden" : "flex"
      } justify-center items-center absolute top-32 left-1/2 transform -translate-x-1/2 z-50`}
    >
      {steps.map((s, index) => (
        <React.Fragment key={s.id}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => onStepChange(index)}
            className={`w-24 h-24 rounded-full flex items-center justify-center cursor-pointer ${
              index <= step ? "bg-yellow-500" : "bg-white"
            }`}
          >
            <img src={s.image} alt={`Step ${s.id}`} className="w-14 h-14" />
          </motion.div>
          {index < steps.length - 1 && (
            <div
              className={`w-14 h-2 ${
                index < step ? "bg-yellow-500" : "bg-white"
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressBar;
