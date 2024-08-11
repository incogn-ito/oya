import { Router } from 'express'
import * as workoutsCtrl from '../controllers/workouts.js'

const router = Router()

// POST /workouts
router.get('/', workoutsCtrl.index)

// GET /workouts/new
router.get('/new', workoutsCtrl.new)

// // GET localhost:3000/workouts/:workoutId/edit
// router.get('/:workoutId/edit', workoutsCtrl.edit)

// // GET localhost:3000/workouts/:workoutId
// router.get('/:workoutId', workoutsCtrl.show)

// POST /workouts
router.post('/', workoutsCtrl.create)

// // DELETE localhost:3000/workouts/:workoutId
// router.delete('/:workoutId', workoutsCtrl.delete)

// // PUT localhost:3000/workouts/:workoutId
// router.put('/:workoutId', workoutsCtrl.update)

export {
	router
}