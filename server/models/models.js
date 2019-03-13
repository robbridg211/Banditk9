
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants', { useNewUrlParser: true });// Use native promises
mongoose.Promise = global.Promise;

const RateSchema = new mongoose.Schema({
  name: {type: String, required: [true, "*Name is required"], minlength: [3, "*Must be at least 3 characters"] },
  stars: {type: Number, required: [true, "*Star Rating is required"]}, 
  review: {type: String, required: [true, "*Review is required"], minlength: [3, "*Must be at least 3 characters"]}
},
  { timestamps: true});

const RestaurantSchema = new mongoose.Schema({
    restaurant: {type: String, required: [true, "*Name is required"], minlength: [3, "*Must be at least 3 characters"]},
    cuisine: {type: String, required: [true, "*Cuisine is required"], minlength: [3, "*Must be at least 3 characters"]},
    ratings: [RateSchema]
  },
  { timestamps: true});


const Rate = mongoose.model('Rate', RateSchema);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);


  
module.exports = {
  Rate: Rate,
  Restaurant: Restaurant
}