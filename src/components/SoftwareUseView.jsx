import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

const SoftwareUseView = ({ onNext }) => {
  const [selectedSoftware, setSelectedSoftware] = useState([]);

  const toggleSoftware = (software) => {
    setSelectedSoftware((prev) =>
      prev.includes(software)
        ? prev.filter((s) => s !== software)
        : [...prev, software]
    );
  };

  const handleSubmit = () => onNext({ software: selectedSoftware });

  const softwareOptions = [
    {
      imageurl: "./ps.png",
      name: "Photoshop",
    },
    {
      imageurl: "./illu.png",
      name: "Illustrator",
    },
    {
      imageurl: "./canva.png",
      name: "Canva",
    },
    {
      imageurl: "./express.png",
      name: "Express",
    },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-[90vh] gap-8"
    >
      {" "}
      <h1 className="text-[72px] text-[#F6D31F] mb-4">
        What software do you use?
      </h1>
      <div className="grid grid-cols-4 gap-4 mb-4">
        {softwareOptions.map((software) => (
          <div
            key={software.name}
            onClick={() => toggleSoftware(software.name)}
            className={`h-[200px] w-[200px] border border-[#F6D31F] rounded-3xl cursor-pointer flex justify-center items-center ${
              selectedSoftware.includes(software.name)
                ? "bg-[#F6D31F] text-white"
                : "bg-transparent"
            }`}
          >
            <img width={150} height={150} src={software.imageurl} alt={software} />
          </div>
        ))}
      </div>
      <CustomButton
        onClick={handleSubmit}
        text={"Next"}
        className="bg-[#F6D31F] py-4 px-4 w-[30%] text-[#9B4191] rounded-full"
      />
    </motion.div>
  );
};

export default SoftwareUseView;
