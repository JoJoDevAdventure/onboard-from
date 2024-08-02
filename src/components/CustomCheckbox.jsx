import React from 'react';

const CustomCheckbox = ({ value, checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer text-white">
      <div className="relative">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className="hidden"
        />
        <div
          className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
            checked ? 'bg-[#F6D31F] border-[#F6D31F]' : 'border-[#F6D31F]'
          }`}
        >
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-[#9B4191]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span>{label}</span>
    </label>
  );
};

export default CustomCheckbox;