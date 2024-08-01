import { motion } from "framer-motion";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomNumberInput from "./CustomNumberInput"; // Import the CustomNumberInput component

const PersonalInfoView = ({ onNext }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    experience: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => onNext(data);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      className="flex flex-col items-center justify-top bg-transparent h-[90vh] gap-8"
    >
      <h1 className="text-[36px] md:text-[72px] text-[#F6D31F] mb-4 text-center">
        Tell us more about you
      </h1>
      <div className="flex flex-col w-[90%] md:w-[30%]">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
          className="mb-4 p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          className="mb-4 p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white"
        />
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-5">
          <p className="text-xl text-white mb-2 md:mb-0">How old are you?</p>
          <CustomNumberInput forV='age' value={data.age} onChange={handleChange} defaultValue={20} />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center px-5">
          <p className="text-xl text-white mb-2 md:mb-0">Years of experience?</p>
          <CustomNumberInput forV='experience' value={data.experience} onChange={handleChange} defaultValue={3}/>
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