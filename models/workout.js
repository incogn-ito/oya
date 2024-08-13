import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const commentSchema = new Schema ({
  content: String,
  weather: {
    type: String,
    enum: ['Sunny', 'Partly Cloudy', 'Overcast', 'Rainy', 'Snowy', 'Windy']
  },
  temperature: Number,
 }, {
    timestamps: true
})

const workoutSchema = new Schema({
  workout: {
    type: String,
    enum: ['Run', 'Walk', 'Weights', 'Yoga']
  },
  caloriesBurned: Number,
  duration: Number,
  comments: [commentSchema],
  startDate: {
    type: Date,
    default: Date.now,
    get: (date)=> 
      date.toLocaleString(),
  }
}, {
    timestamps: true
}) 

const Workout = mongoose.model('Workout', workoutSchema)

export {
    Workout
}