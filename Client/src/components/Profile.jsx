import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-24 w-24">
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&s"
              alt="Company logo"
            />
          </Avatar>
          <div>
            <h1>Full Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              ipsa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
