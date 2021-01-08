module.exports = {
    Workout: require('./Workout')
  };

//  So, when this file is loaded, it requires the workout.js file in the same directory. From there, it will then export that variable (so it may be used outside of the index.js file) to the Workout variable. This way, let's say that you do the following in another file:
// const db = require("models/index");
// When this runs, it will require the index.js file in the models/ directory. This will make the db.Workout variable accessible, since, in the index.js file, this variable is linked to the workout model itself.
// So, then, we can access the model by doing similar to the following:
// db.Workout.find();

// This is generally used when you have multiple models - let's say User, Book, etc. This way, instead of having to require each model individually, you can just require one file - in our case, the index.js file - and then use the exported variables to access each model independently. It's more or less a way to consolidate your models down to one file for ease of access/use