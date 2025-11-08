
import express from "express";
import Experience from "../models/experienceModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Experience.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) {
      return res.status(404).json({ message: "Experience not found" });
    }
    res.json(exp);
  } catch (err) {
    console.error("Error fetching experience:", err);
    res.status(500).json({ message: "Error fetching experience" });
  }
});


router.post("/", async (req, res) => {
  try {
    const exp = new Experience(req.body);
    const saved = await exp.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
