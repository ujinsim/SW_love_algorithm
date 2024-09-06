import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function GenderSelection({
  label,
  selectedGender,
  onGenderChange,
}) {
  const [gender, setGender] = useState(selectedGender);

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    onGenderChange(newGender);
  };

  return (
    <fieldset className="text-gray-900">
      <legend className="text-base font-semibold mb-2">{label}</legend>
      <div className="flex gap-4">
        <button
          className={`flex flex-col border-transparent border-2 shadow-md rounded-3xl p-4 transition-colors duration-200 ${
            gender === "male" ? " border-blue-500" : "bg-white"
          }`}
          onClick={() => handleGenderChange("male")}
        >
          <div className="flex w-full justify-between">
            <div className="flex w-full items-center justify-between pb-3">
              남자 {gender === "male" && <FaCheck />}
            </div>
          </div>
          <div className="text-7xl">🚹</div>
        </button>

        <button
          className={`flex flex-col border-2 border-transparent shadow-md rounded-3xl p-4 transition-colors duration-200 ${
            gender === "female" ? " border-pink-500" : "bg-white"
          }`}
          onClick={() => handleGenderChange("female")}
        >
          <div className="flex w-full justify-between">
            <div className="flex w-full items-center justify-between pb-3">
              여자 {gender === "female" && <FaCheck />}
            </div>
          </div>
          <div className="text-7xl">🚺</div>
        </button>
      </div>
    </fieldset>
  );
}
