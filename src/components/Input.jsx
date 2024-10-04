import React from "react";

const Input = ({ label, type, value, onChange, placeholder, error }) => {
  return (
    <div className="">
      <label className="block text-gray-700 text-lg font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`appearance-none rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none ${
          error ? "border-red-500" : ""
        }`}
      />
      {error && <p className="text-red-500 text-xs pt-2">{error}</p>}
    </div>
  );
};

export default Input;
