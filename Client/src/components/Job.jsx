import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="p-4 md:p-6 shadow-md bg-white border border hover:scale-[1.02] hover:shadow-lg transition-transform duration-300">
      {/* Top Row: Time and Bookmark */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <time dateTime="2023-08-20">2 days ago</time>
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
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&s"
              alt="Company logo"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-semibold text-lg text-gray-800">Company Name</h1>
          <p className="text-gray-500 text-sm">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title </h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
          reiciendis doloribus dolorum odio vitae obcaecati, animi minus maiores
          inventore fugiat?
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
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
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
