const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
    required: "How many pounds",
    default: 0 
  },
  // Sets
  sets: {
    type: Number,
    required: "How many sets",
    default: 0 
  },
  // Reps
  reps: {
    type: Number,
    required: "How many reps",
    default: 0 
  },
  // Duration
  duration: {
    type: Number,
    required: "How many minutes",
    default: 0 
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;