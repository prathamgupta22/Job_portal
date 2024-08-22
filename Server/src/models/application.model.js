import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    title: {
      type: String,
      required: true, // Title of the job, referenced from Job
    },
    company: {
      type: String,
      required: true, // Company name, referenced from Job
    },
  },
  { timestamps: true }
);

export const Application = mongoose.model("Application", applicationSchema);
