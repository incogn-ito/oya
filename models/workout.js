import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema
	
const workoutSchema = new Schema({
  workout: {
    type: String,
    enum: ['Run', 'Walk', 'Weights', 'Yoga']
  },
  caloriesBurned: Number,
  duration: Number,
  startDate: Date
}, {
    timestamps: true
}) 

const Workout = mongoose.model('Workout', workoutSchema)

export {
    Workout
}