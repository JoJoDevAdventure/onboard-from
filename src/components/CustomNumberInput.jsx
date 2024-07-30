import React from 'react';

const CustomNumberInput = ({ forV, value, onChange, defaultValue }) => {
  const handleIncrement = () => {
    onChange({ target: { name: forV, value: Math.min(Number(value) + 1, 120) } });
  };

  const handleDecrement = () => {
    onChange({ target: { name: forV, value: Math.max(Number(value) - 1, 0) } });
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={handleDecrement}
        className="bg-[#F6D31F] text-[#9B4191] rounded-full mr-4 w-12 h-12"
      >
        -
      </button>
      <input
      defaultValue={defaultValue}
        type="number"
        name={forV}
        placeholder=""
        value={value}
        onChange={onChange}
        className="w-16 text-center p-4 border border-[#F6D31F] bg-transparent rounded-full text-white placeholder-white"
        min="0"
        max="120"
      />
      <button
        type="button"
        onClick={handleIncrement}
        className="bg-[#F6D31F] text-[#9B4191] rounded-full ml-4 w-12 h-12"
      >
        +
      </button>
    </div>
  );
};

export default CustomNumberInput;