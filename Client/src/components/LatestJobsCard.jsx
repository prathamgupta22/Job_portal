import React from "react";
import { Badge } from "./ui/badge";

const LatestJobsCard = () => {
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-gray-500 duration-500 ease-in-out transform hover:scale-105 transition-all">
      <div className="mb-3">
        <h1 className="font-semibold text-xl text-gray-800">
          Tech Solutions Ltd.
        </h1>
        <p className="text-sm text-gray-500">Bangalore, India</p>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-lg text-blue-800 my-2">
          Frontend Developer
        </h1>
        <p className="text-sm text-gray-600">
          Join our dynamic team to build modern web applications using React,
          Tailwind CSS, and JavaScript. We are looking for talented developers
          who are passionate about user-centric design and innovative
          technologies.
        </p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge className="text-blue-700 font-bold px-2 py-1" variant="ghost">
          5 Positions
        </Badge>
        <Badge className="text-green-700 font-bold px-2 py-1" variant="ghost">
          Full-Time
        </Badge>
        <Badge className="text-purple-900 font-bold px-2 py-1" variant="ghost">
          ₹12 - 24 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCard;
