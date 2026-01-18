import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    prompt: String,
    config: Object,   // generated website config JSON
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
