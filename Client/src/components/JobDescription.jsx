import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const isIntiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP}/application/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while applying."
      );
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP}/job/get/${jobId}`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } //ensure the state is in synch
      } catch (error) {
        console.error(error);
      }
    };
    fetchSingleJob();

    // Optional cleanup to reset the single job state on component unmount
    return () => {
      dispatch(setSingleJob(null));
    };
  }, [jobId, dispatch]);

  return (
    <div className="max-w-7xl my-10 mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div>
          <h1 className="font-semibold text-3xl md:text-3xl text-gray-900">
            {singleJob?.title}
          </h1>
          <div className="flex items-center gap-3 flex-wrap mt-4">
            <Badge
              className="text-blue-700 font-bold px-3 py-1 rounded-full bg-blue-100"
              variant="ghost"
            >
              <i className="fa fa-users mr-2"></i>
              {singleJob?.position} Position
            </Badge>
            <Badge
              className="text-green-700 font-bold px-3 py-1 rounded-full bg-green-100"
              variant="ghost"
            >
              <i className="fa fa-clock mr-2"></i> {singleJob?.jobType}
            </Badge>
            <Badge
              className="text-purple-900 font-bold px-3 py-1 rounded-full bg-purple-100"
              variant="ghost"
            >
              <i className="fa fa-money-bill mr-2"></i> {singleJob?.salary}
            </Badge>
          </div>
        </div>
        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`mt-4 md:mt-0 rounded-lg transition-all duration-300 ${
            isApplied
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-purple-900 text-white"
          } px-6 py-3 font-semibold text-lg`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <h1 className="border-b-2 border-b-gray-300 font-medium text-lg md:text-xl py-6 mt-6">
        Job Description
      </h1>

      <div className="my-6 space-y-4">
        <h1 className="font-semibold text-lg">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.title}
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.location}
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Description :
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Experience :
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experience}
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Salary :
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary} LPA
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.applications?.length}
          </span>
        </h1>
        <h1 className="font-semibold text-lg">
          Posted Dates :
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
