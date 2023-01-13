require("dotenv").config();

const express = require("express");
const workoutRoute = require("./routes/workouts");
const mongoose = require("mongoose");

// express app
const app = express();

//middleware
app.use(express.json());

// routes
app.use("/api/workouts", workoutRoute);

// connect to db
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen port
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
