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

  async function deleteWorkout(req, res) {
    try {
      await Workout.findByIdAndDelete(req.params.workoutId)
      res.redirect('/workouts')
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }

  async function edit(req, res) {
    try {
      // find movie by id to edit
      const workout = await Workout.findById(req.params.workoutId)
      // render edit page
      res.render('workouts/edit', {
        workout,
        title: 'Edit Workout'
      })
    } catch (error) {
      console.log(error)
      res.redirect('/workouts')
    }
  }
  
  async function update(req, res) {
    try {
      const workout = await Workout.findByIdAndUpdate(req.params.workoutId, req.body, {new: true})
      res.redirect(`/workouts/${workout._id}`)
    } catch (error) {
      console.log(error)
      res.redirect('/')
    }
  }


export {
    newWorkout as new,
    create,
    index,
    show,
    deleteWorkout as delete,
    edit,
    update
}