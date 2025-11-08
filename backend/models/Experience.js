
import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  title: String,
  location: String,
  price: Number,
  image: String,
  excerpt: String,
});

const Experience = mongoose.model("Experience", experienceSchema);

export default Experience;
