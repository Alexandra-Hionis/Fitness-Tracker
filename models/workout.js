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

// EXAMPLE
// {
//   _id: 1,
//   student: "Maya",
//   homework: [ 10, 5, 10 ],
//   quiz: [ 10, 8 ],
//   extraCredit: 0
// }
// {
//   _id: 2,
//   student: "Ryan",
//   homework: [ 5, 6, 5 ],
//   quiz: [ 8, 8 ],
//   extraCredit: 8
// }
// db.scores.aggregate( [
//   {
//     $addFields: {
//       totalHomework: { $sum: "$homework" } ,
//       totalQuiz: { $sum: "$quiz" }
//     }
//   },
//   {
//     $addFields: { totalScore:
//       { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
//   }
// ] )

// convert to duration of each workout
db.minutes.aggregate( [
  {
    $addFields: {
      totalDays: { $sum: "$days" } ,
      totalExercises: { $sum: "$exercises" }
    }
  },
  {
    $addFields: { totalScore:
      { $add: [ "$totalDays", "$totalExercies" ] } }
  }
] )