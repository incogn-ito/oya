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


export {
    newWorkout as new,
    create,
    index,

}