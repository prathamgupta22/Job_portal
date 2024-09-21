import { Application } from "../models/application.model.js";
import { Job } from "./../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;

    if (!jobId) {
      return res.status(400).send({
        message: "Job id is required.",
        success: false,
      });
    }

    // Check if the user has already applied for the job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });

    if (existingApplication) {
      return res.status(400).send({
        message: "You have already applied for this job",
        success: false,
      });
    }

    // Check if the job exists
    const job = await Job.findById(jobId).populate("company");
    if (!job) {
      return res.status(404).send({
        message: "Job not found",
        success: false,
      });
    }

    // Create a new application with the required fields
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
      company: job.company._id, // Referencing the company ObjectId
      title: job.title, // Referencing the job title
    });

    // Update the job with the new application
    job.applications.push(newApplication._id);
    await job.save();

    return res.status(201).send({
      message: "Job applied successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in apply job API",
    });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res.status(404).send({
        message: "No Applications",
        success: false,
      });
    }
    return res.status(200).send({
      application,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in GET APPLICANT JOBS API",
    });
  }
};

// admin dekhega kitna user ne apply kiya hai
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).send({
        message: "Job Not found",
        success: false,
      });
    }
    return res.status(200).send({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in get applicants API",
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).send({
        message: "Status is required",
        success: false,
      });
    }

    // Validate if the status is either "Accepted" or "Rejected"
    const validStatuses = ["accepted", "rejected"];
    if (!validStatuses.includes(status.toLowerCase())) {
      return res.status(400).send({
        message: "Invalid status",
        success: false,
      });
    }

    // Find the application
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(404).send({
        message: "Application not found",
        success: false,
      });
    }

    // Update the application status
    application.status = status.toLowerCase();
    await application.save();

    return res.status(200).send({
      message: "Status updated successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "Error updating application status",
      success: false,
    });
  }
};
