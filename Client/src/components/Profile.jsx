import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import { Label } from "./ui/label";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

// const skills = ["Html", "Css", "Javascript", "Reactjs"];

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const isResume = true;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 sm:px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="Profile picture"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0 flex-shrink-0 "
            onClick={() => setOpen(true)}
          >
            <Pen className="mr-1" />
            Edit Profile
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail className="w-5 h-5" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact className="w-5 h-5" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-medium">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user?.profile?.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-bold text-xl mb-3">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
