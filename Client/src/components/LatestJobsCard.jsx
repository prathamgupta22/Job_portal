import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobsCard = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-6 rounded-lg shadow-lg bg-white border border-gray-200 cursor-pointer hover:shadow-2xl hover:shadow-gray-500 duration-500 ease-in-out transform hover:scale-105 transition-all"
    >
      <div className="mb-3">
        <h1 className="font-semibold text-xl text-gray-800">
          {job?.company?.name}
        </h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div className="mb-4">
        <h1 className="font-bold text-lg text-blue-800 my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge className="text-blue-700 font-bold px-2 py-1" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-green-700 font-bold px-2 py-1" variant="ghost">
          {job.jobType}
        </Badge>
        <Badge className="text-purple-900 font-bold px-2 py-1" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCard;
