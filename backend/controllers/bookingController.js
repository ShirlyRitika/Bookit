import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ message: "Booking confirmed!", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("experienceId");
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
