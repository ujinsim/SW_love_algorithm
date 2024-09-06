import React, { useState } from "react";

const ImageDropdown = ({ options, selected, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
      >
        {label}: {selected ? selected.label : "선택"}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border text-black border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.label}
              onClick={() => handleSelect(option)}
              className="w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 focus:outline-none"
            >
              <img
                src={option.src}
                width={option.width}
                alt={option.label}
                className="mr-2 w-5"
              />
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageDropdown;
