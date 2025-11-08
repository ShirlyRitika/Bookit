import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import experienceRoutes from "./routes/experienceRoutes.js"; 
import Booking from "./models/Booking.js";   // ✅ ADD THIS

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("🎉 BookIt backend is running!");
});

app.use("/api/experiences", experienceRoutes);


// ✅ NEW: BOOKING ROUTE
app.post("/api/bookings", async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running at: http://localhost:${PORT}`)
);
