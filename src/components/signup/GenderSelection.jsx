import React from "react";

const GenderSelection = ({ gender, onGenderChange, label }) => {
  return (
    <fieldset className="text-gray-900">
      <legend className="text-base font-semibold mb-2">{label}</legend>
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={() => onGenderChange("male")}
            className="form-radio"
          />
          남자
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={() => onGenderChange("female")}
            className="form-radio"
          />
          여자
        </label>
      </div>
    </fieldset>
  );
};

export default GenderSelection;
