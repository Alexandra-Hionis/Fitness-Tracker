const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("express").Router();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
//   useCreateIndex: true
// });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Workouts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
// routes

require('./routes/api-routes.js')(app);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/stats.html"));
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

module.exports = router;

// notes to self 

// So a lot of “stuff” goes on when establishing routes and making http requests….
// Express is middleware that handles most of that stuff internally and with a lot less code…
// So, you are telling your app, “Hey, use Express for this” with const app = express()…

// Then you are adding middleware or built-in functions to say, “Hey, and make sure everything is urlencoded and bring my responses back in json form….

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// You are also saying, “When the program comes looking for my html, css, and images and stuff look for it in my public folder and start the file paths from their.

// Hence….app.use(express.static("public"));

// And then you are setting up your routes to be located at different endpoints by using app.use("./whatever/route/you/want")

// app.use… is kinda like picking out a new car and deciding what all the features that you want built into it.

// This way all these things get handled in the middle of 1.Making the http request and 2. Sending the http request.

