const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // Day
  day: {
    type: Date,
    default: Date.now
  },
  // Name of workout
  name: {
    type: String,
    trim: true,
    required: "Name of workout"
  },
  // Type of workout
  type: {
    type: String,
    trim: true,
    required: "Type of workout",
  },
  // Weight
  weight: {
    type: Number,
    required: "How many pounds"
  },
  // Sets
  sets: {
    type: Number,
    required: "How many sets"
  },
  // Reps
  reps: {
    type: Number,
    required: "How many reps"
  },
  // Duration
  duration: {
    type: Number,
    required: "How many minutes"
  }
});
