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
      <div className="flex gap-4 ">
        <button
          className={`flex gap-2 border-transparent border-2 shadow-md rounded-3xl p-3 transition-colors duration-200 ${
            gender === "MALE" ? " bg-white" : ""
          }`}
          onClick={() => handleGenderChange("MALE")}
        >
          <div className="flex w-full justify-between">
            <div className="flex flex-col w-full items-center justify-between pb-1">
              남자
            </div>
          </div>
          <div className="text-3xl">🚹</div>
        </button>

        <button
          className={`flex gap-2 border-2 border-transparent shadow-md rounded-3xl p-3 transition-colors duration-200 ${
            gender === "FEMALE" ? " bg-white" : ""
          }`}
          onClick={() => handleGenderChange("FEMALE")}
        >
          <div className="flex w-full justify-between">
            <div className="flex w-full items-center justify-between pb-1">
              여자
            </div>
          </div>
          <div className="text-3xl">🚺</div>
        </button>
      </div>
    </fieldset>
  );
}
