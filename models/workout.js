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

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;


// Aggregate Method

// https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/, https://docs.mongodb.com/manual/reference/operator/aggregation/sum/, https://mongoosejs.com/docs/api.html#aggregate_Aggregate

// USE AGGREGATE TO GET THE TOTAL DURATION (MIN) FROM THE PAST 7 DAYS ON STATS PAGE

// For the aggregation in MongoDB, you should use aggregate() method.
// >db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
//  Using Two $addFields Stages

// db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : "$likes"}}}]) https://www.tutorialspoint.com/mongodb/mongodb_aggregation.htm

// db.workouts.aggregate(([{$group : {exercises, num_tutorial : {$sum : "$duration"}}}]))


// Workout.aggregate([
//   {
//     $addFields: {
//       what you want to call new field: {
//         $sum: '$ what you are adding up
//       }
//     },
//   },
// ])
// So in this case- #add fields does the math for me --- > I just tell it hey here is the field name on the model --> and here is what I have to add up

Workout.aggregate([
  {
    $addFields: {
      $totalDuration: {
        $sum: '$exercises.duration'
      }
    },
  },
])