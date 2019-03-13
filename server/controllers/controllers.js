const collections = require('../models/models');
const Restaurant = collections.Restaurant;
const Rate = collections.Rate;

module.exports = {
//RETRIEVE ALL RESTAURANTS ROUTE
    restaurants: function(req, res) {
        Restaurant.find({}, function(err, restaurants) {
            if(err) {
                console.log('something went wrong with retrieving all restaurants');
                res.json({message: "Error", error: err});
            } 
            else {
                console.log('success: viewing all restaurants in database');
                res.json({status: "Success", restaurants: restaurants});
            }
        })
    },

    //GET ONE RESTAURANT ROUTE
    restaurant: function(req, res) {
        Restaurant.find({_id: req.params.id}, function(err, restaurant) {
            if(err) {
                console.log('something went wrong with showing one restaurant');
                res.json({message: "Error", error: err})
            } 
            else {
                console.log("success: viewing selected restaurant in database");
                res.json({status: "Success", restaurant: restaurant})
            }
        });
    }, 

    //CREATE NEW RESTAURANT ROUTE
    newRestaurant: function(req, res) {
        Restaurant.create(req.body, function(err, restaurant) {
            if(err) {
                let data = {}
                for (let key in err.errors) {
                    data[key] = err.errors[key].message;
                }
                console.log('We have an error', err);
                res.json({message: "Error", error: err})
                } 
            else {
                console.log('successfully added restaurant!');
                res.json({status: "Successfully added!", restaurant: restaurant});
            }
        });
    },

//EDIT ONE RESTAURANT ROUTE
    updateRestaurant: function(req, res) {
        Restaurant.findByIdAndUpdate({_id: req.params.id}, {restaurant: req.body.restaurant, cuisine: req.body.cuisine}, function(err) {
            if(err) {
                console.log('something went wrong with updating a restaurant');
                res.json({message: "Error", error: err})
            } 
            else {
                console.log("success: edited selected restaurant in database");
                res.json({status: "Edit Success"})
            }  
        })
    },

//ADD REVIEW TO RESTAURANT ROUTE
    postRate: function(req, res) {
        Rate.create(req.body, function(err, rating) {
            if (err) {
                let data = {}
                for(let key in err.errors) {
                    data[key] = err.errors[key].message;
                }
                // res.json({status: "Error", message: data});
                res.json({message: "Text"});
            }
            else {
                Restaurant.findByIdAndUpdate({ _id: req.params.restID }, { $push: {ratings: rating} }, function(err) {
                    if (err) {
                        // res.json({status: "Error", message: err });
                        res.json({message: "Text"});
                    }
                    else {
                        res.json({message: "Text"});
                        // res.json({status: "Rating successfully added!"});
                    }
                })
            }
        })
    },

//DELETE ONE RESTAURANT ROUTE
    deleteRestaurant: function(req, res) {
        Restaurant.findByIdAndDelete({_id: req.params.restID}, function(err) {
            if(err) {
                console.log('something went wrong with deleting a restaurant');
                res.json({message: "Error", error: err})
            } 
            else {
                console.log("success: deleted selected restaurant in database");
                res.json({status: "Delete Success"})
            }  
        })
    },

}