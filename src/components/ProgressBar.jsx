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
        step === 0 || step === 4 ? "hidden" : "flex"
      } justify-center items-center absolute top-30 md:top-32 left-1/2 transform -translate-x-1/2 z-50 flex md:flex-nowrap`}
    >
      {steps.map((s, index) => (
        <React.Fragment key={s.id}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={{}}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center cursor-pointer ${
              index <= step ? "bg-yellow-500" : "bg-white"
            } m-1`}
          >
            <img src={s.image} alt={`Step ${s.id}`} className="w-10 h-10 md:w-14 md:h-14" />
          </motion.div>
          {index < steps.length - 1 && (
            <div
              className={`w-2 h-2 md:w-14 ${
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