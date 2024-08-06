import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomCheckbox from "./CustomCheckbox"; // Import the CustomCheckbox component

const DesignerWorkView = ({ onNext }) => {
  const [selectedMarketTargets, setSelectedMarketTargets] = useState([]);
  const [commissionRate, setCommissionRate] = useState("");
  const [isCommissionBasedModel, setIsCommissionBasedModel] = useState(false);
  const [isCommissionRateValid, setIsCommissionRateValid] = useState(true); // State to track the validity of the commission rate

  const toggleMarketTarget = (target) => {
    setSelectedMarketTargets((prev) =>
      prev.includes(target)
        ? prev.filter((t) => t !== target)
        : [...prev, target]
    );
  };

  const handleChange = (e) => {
    setCommissionRate(e.target.value);
  };

  const handleSubmit = () => {
    if (commissionRate === "") {
      setIsCommissionRateValid(false);
      setTimeout(() => {
        setIsCommissionRateValid(true);
      }, 1500); // Reset to valid state after 1.5 seconds
    } else {
      onNext({
        selectedMarketTargets,
        commissionRate,
        isCommissionBasedModel,
      });
    }
  };

  const toggleCommissionBasedModel = () => {
    setIsCommissionBasedModel((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array ensures this runs only once

  const marketTargets = [
    "Online greeting card retailers (eg Moonpig, Funky Pigeon, Scribbler...)",
    "Marketplace e-commerce (eg Etsy, Amazon, Not on the high street...)",
    "Print on demand e-commerce (eg Redbubble, Society6...)",
    "Own website or physical shop",
    "Independent local shops",
    "Markets and fairs",
    "Garden centres",
    "Charity shops",
    "Galleries and museums",
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-full pb-20 gap-8"
    >
      <h1 className="text-[36px] w-[70%] md:w-full md:text-[72px] text-[#F6D31F] mb-4 text-center">
      Where are your designs /
Online greeting ca
products listed?
      </h1>
      <div className="flex flex-col items-start gap-4 mb-4 w-[90%] md:w-[50%]">
        {marketTargets.map((target) => (
          <CustomCheckbox
            key={target}
            value={target}
            checked={selectedMarketTargets.includes(target)}
            onChange={() => toggleMarketTarget(target)}
            label={target}
          />
        ))}
      </div>

      <h1 className="text-[36px] w-[70%] md:w-full md:text-[72px] text-[#F6D31F] mb-4 text-center">
        Payment
      </h1>
      <div className="flex flex-col items-start gap-4 mb-4 w-[90%] md:w-[50%]">
        <CustomCheckbox
          value="isCommissionBasedModel"
          checked={isCommissionBasedModel}
          onChange={toggleCommissionBasedModel}
          label="I am comfortable with compensation through a commission-based model"
        />
        <label htmlFor="commissionRate" className="text-white text-xl md:text-2xl">
        What commission rate are you expecting for each sale of your design?
        </label>
        <input
          type="number"
          name="commissionRate"
          placeholder="Enter your commission rate %"
          value={commissionRate}
          onChange={handleChange}
          className={`p-4 border ${
            isCommissionRateValid ? "border-[#F6D31F]" : "border-red-500"
          } bg-transparent rounded-full text-white placeholder-white w-full`}
        />
      </div>

      <CustomButton
        onClick={handleSubmit}
        text={"Submit"}
        className="bg-[#F6D31F] py-4 px-4 w-[90%] md:w-[30%] text-[#9B4191] rounded-full"
      />
    </motion.div>
  );
};

export default DesignerWorkView;