import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Experience" },
  name: String,
  email: String,
  date: String,
  time: String,
  quantity: Number,
  total: Number,
  status: { type: String, default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
