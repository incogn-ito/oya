import { Workout } from "../models/workout.js";

function newWorkout(req, res) {
    res.render('workouts/new', {
        title: 'Add Workout'
    })
}

async function create(req, res) {
  try {
     await Workout.create(req.body)
     res.redirect('/workouts')
  } catch (error) {
      console.log(error)
      res.redirect('/workouts/new')
  }
}

  async function index(req, res) {
    try {
      const workouts = await Workout.find({})
      res.render('workouts/index', {
        title: 'All Workouts',
        workouts
      })
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  }

  async function show(req, res) {
    try {
      const workout = await Workout.findById(req.params.workoutId)
      console.log(req.params.workoutId)
      res.render('workouts/show', {
        workout,
        title: 'Workout Details'
      })
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }



export {
    newWorkout as new,
    create,
    index,
    show,

}