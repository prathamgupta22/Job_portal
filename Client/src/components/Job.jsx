import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-4 md:p-6 shadow-md bg-white border border hover:scale-[1.02] hover:shadow-lg transition-transform duration-300">
      {/* Top Row: Time and Bookmark */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button
          variant="outline"
          className="rounded-full hover:bg-gray-100 transition-colors duration-200"
          size="icon"
        >
          <Bookmark className="text-gray-600" />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 my-4">
        <Button
          className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200"
          variant="outline"
          size="icon"
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={job?.company.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">
            {job?.company?.name}
          </h1>
          <p className="text-gray-500 text-sm">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title} </h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <Badge className="text-blue-700 font-bold px-2 py-1" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-green-700 font-bold px-2 py-1" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-900 font-bold px-2 py-1" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/description/${job?._id}`)}
        >
          Details
        </Button>
        <Button
          variant="outline"
          className="bg-[#6A38C2] text-white font-semibold hover:bg-purple-700"
        >
          Save for later
        </Button>
      </div>
    </div>
  );
};

export default Job;
