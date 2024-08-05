import React from 'react';
import CustomButton from './CustomButton';

const Navbar = () => (
  <nav className="bg-transparent py-6 md:px-40 px-8 flex justify-between items-center">
    <img src='./logo.png' className="text-xl font-bold w-40"/>
    <div className="text-[#F6D31F] text-xl hidden md:block uppercase">BECOME A PLONKKAA TODAY</div>
    <CustomButton text={"Contact Us"} className="  py-3 px-5 rounded text-sm"/>
  </nav>
);

export default Navbar;