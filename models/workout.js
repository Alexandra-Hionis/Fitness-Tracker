const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  // Day
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
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
}
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


// USE AGGREGATE TO GET THE TOTAL DURATION (MIN) FROM THE PAST 7 DAYS ON STATS PAGE
// Using Two $addFields Stages
// A collection called scores contains the following documents:


// db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}]) https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm

db.workouts.aggregate(([{$group : {exercises, num_tutorial : {$sum : "$likes"}}}]))


