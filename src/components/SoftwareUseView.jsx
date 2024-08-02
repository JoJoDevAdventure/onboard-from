import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import CustomCheckbox from "./CustomCheckbox"; // Import the CustomCheckbox component

const SoftwareUseView = ({ onNext }) => {
  const [selectedSoftware, setSelectedSoftware] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedDesignStyle, setSelectedDesignStyle] = useState([]);

  const toggleSoftware = (software) => {
    setSelectedSoftware((prev) =>
      prev.includes(software)
        ? prev.filter((s) => s !== software)
        : [...prev, software]
    );
  };

  const toggleExperience = (experience) => {
    setSelectedExperience((prev) =>
      prev.includes(experience)
        ? prev.filter((e) => e !== experience)
        : [...prev, experience]
    );
  };

  const toggleDesignStyle = (style) => {
    setSelectedDesignStyle((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleSubmit = () =>
    onNext({
      software: selectedSoftware,
      experience: selectedExperience,
      designStyle: selectedDesignStyle,
    });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array ensures this runs only once

  const softwareOptions = ["Photoshop", "Illustrator", "Canva", "Express"];

  const softwareImages = {
    Photoshop: "./ps.png",
    Illustrator: "./illu.png",
    Canva: "./canva.png",
    Express: "./express.png",
  };

  const experienceOptions = [
    "I design cards and other merch as a hobby whenever I feel inspired; the money is just a perk.",
    "I design greeting cards and other merch to supplement my income.",
    "The greeting cards and merch I design is my primary source of income.",
    "I represent a number of creatives and sell their products online and in brick-and-mortar stores.",
    "I have a large social media following and have collaborated with thortful / Scribbler to create exclusive cards.",
    "None of the above",
  ];

  const designStyle = [
    "Cheeky: Banter, Dirty, or Naughty",
    "Rude: Sweary or Slightly Offensive",
    "Funny: Relatable, Whimsical, or Punny",
    "Heartfelt: Platonic or Romantic",
    "Recipient Specific: Milestones, Age, or Recipients",
    "Nature: Pets, Wildlife, Botanicals, or Floral",
    "Pop Culture: Trending, Celebrity, TV/Film, News, or Politics",
    "LGBTQIA+: Sexuality or Gender",
    "Subcultures & Niche: Alternative",
    "Communities or Hobbies/Activities",
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-full pb-10 gap-8"
    >
      <h1 className="text-[36px] w-[70%] md:w-full md:text-[72px] text-[#F6D31F] mb-4 text-center">
        What software do you use?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {softwareOptions.map((software) => (
          <div
            key={software}
            onClick={() => toggleSoftware(software)}
            className={`h-[120px] w-[120px] md:h-[200px] md:w-[200px] border border-[#F6D31F] rounded-3xl cursor-pointer flex justify-center items-center ${
              selectedSoftware.includes(software)
                ? "bg-[#F6D31F] text-white"
                : "bg-transparent"
            }`}
          >
            <img
              src={softwareImages[software]}
              alt={software}
              className="w-[90px] md:w-[90px]"
            />
          </div>
        ))}
      </div>

      <h1 className="text-[36px] w-[70%] md:w-full md:text-[72px] text-[#F6D31F] mb-4 text-center">
        What's your past design experience?
      </h1>
      <div className="flex flex-col items-start gap-4 mb-4 w-[90%] md:w-[50%]">
        {experienceOptions.map((experience) => (
          <CustomCheckbox
            key={experience}
            value={experience}
            checked={selectedExperience.includes(experience)}
            onChange={() => toggleExperience(experience)}
            label={experience}
          />
        ))}
      </div>

      <h1 className="text-[36px] w-[70%] md:w-full md:text-[72px] text-[#F6D31F] mb-4 text-center">
        What's your design style & Aesthetic?
      </h1>
      <div className="flex flex-col items-start gap-4 mb-4 w-[90%] md:w-[50%]">
        {designStyle.map((style) => (
          <CustomCheckbox
            key={style}
            value={style}
            checked={selectedDesignStyle.includes(style)}
            onChange={() => toggleDesignStyle(style)}
            label={style}
          />
        ))}
      </div>

      <CustomButton
        onClick={handleSubmit}
        text={"Next"}
        className="bg-[#F6D31F] py-4 px-4 w-[90%] md:w-[30%] text-[#9B4191] rounded-full"
      />
    </motion.div>
  );
};

export default SoftwareUseView;
