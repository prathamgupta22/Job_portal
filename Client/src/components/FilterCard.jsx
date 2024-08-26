import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0 - 40k month", "42k - 1lakh month", "1lakh - 5lakh month"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-lg">
      <h1 className="font-bold text-purple-900 text-2xl">Filter Jobs</h1>
      <hr className="mt-4 border-t-2 border-gray-300 shadow-md" />
      <RadioGroup className="mt-6 space-y-5">
        {filterData.map(({ filterType, array }, index) => (
          <div key={filterType}>
            <h2 className="font-semibold text-gray-800 text-xl mb-4">
              {filterType}
            </h2>
            <div className="space-y-3">
              {array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <div key={itemId} className="flex items-center space-x-3">
                    <RadioGroupItem
                      value={item}
                      id={itemId}
                      className="focus:ring-2 focus:ring-purple-600 focus:outline-none"
                    />
                    <Label
                      htmlFor={itemId}
                      className="text-gray-700 hover:text-purple-600 transition-colors duration-150 cursor-pointer"
                    >
                      {item}
                    </Label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
