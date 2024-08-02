import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";


const PersonalInfoView = ({ onNext }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array ensures this runs only once

  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    portfolio: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onNext(data);
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-full pb-20 gap-8"
    >
      <h1 className="text-[36px] md:text-[72px] text-[#F6D31F] text-center">
        Tell us more about you
      </h1>
      <div className="flex flex-col w-[90%] md:w-[30%]">
        <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
          <img src="./p1.png" alt="" className="w-12 h-12 rounded-full" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            className="p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white w-full"
          />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
          <img src="./p2.png" alt="" className="w-12 h-12 rounded-full" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
            className="p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white w-full"
          />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
          <img src="./p3.png" alt="" className="w-12 h-12 rounded-full" />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={data.contact}
            onChange={handleChange}
            className="p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white w-full"
          />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
          <img src="./p4.png" alt="" className="w-12 h-12 rounded-full" />
          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio"
            value={data.portfolio}
            onChange={handleChange}
            className="p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white w-full"
          />
        </div>

        <div className="flex flex-row justify-center items-center w-full gap-4 mb-4">
          <img src="p5.png" alt="" className="w-12 h-12 rounded-full" />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn"
            value={data.linkedin}
            onChange={handleChange}
            className="p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white w-full"
            required
          />
        </div>
      </div>

      <CustomButton
        onClick={handleSubmit}
        text={"Next"}
        className="bg-[#F6D31F] py-4 px-4 w-[90%] md:w-[30%] text-[#9B4191] rounded-full"
      />
    </motion.div>
  );
};

export default PersonalInfoView;