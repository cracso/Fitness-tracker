const router = require("express").Router();
const Workout = require("../models/Workout.js");

module.exports = function (app) {
  
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

      
    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body)
        console.log(req.params.id)
        Workout.findOneAndUpdate({_id: req.params.id}, 
            { $push: { exercises:req.body}})
            .then(dbWorkout => {
                console.log(dbWorkout)
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .sort({ day: -1 })
            .limit(7)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

};
