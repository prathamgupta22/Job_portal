import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="bg-white shadow-sm">
      <div className="flex justify-between items-center mx-auto max-w-7xl h-16 px-4">
        {/* Logo Section */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Easy<span className="text-[#F83002]">Hire</span>
          </h1>
        </div>
        {/* Navigation Section */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium gap-5 items-center text-gray-700">
            <li className="hover:text-[#6A38C2] cursor-pointer">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-[rgb(106,56,194)] cursor-pointer">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="hover:text-[#6A38C2] cursor-pointer">
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" className="hover:bg-gray-100">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6a38c2] hover:bg-[#5b30a6] shadow-md">
                  SignUp
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer hover:opacity-90 transition duration-150">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 shadow-lg rounded-lg">
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Pratham Gupta</h4>
                      <p className="text-sm text-gray-500">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-[#6A38C2] transition duration-150">
                      <User2 />
                      <Button variant="link">
                        <NavLink to="/profile">View Profile</NavLink>
                      </Button>
                    </div>
                    <div className="flex w-fit items-center gap-2 cursor-pointer hover:text-red-600 transition duration-150">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
