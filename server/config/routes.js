var Controllers = require('../controllers/controllers')



module.exports = function (app) {

//RETRIEVE ALL RESTAURANTS ROUTE
app.get('/restaurants', function(req, res) {
    Controllers.restaurants(req, res)
});

//GET ONE RESTAURANT ROUTE
app.get('/restaurant/:id', function(req, res) {
    Controllers.restaurant(req, res)
});

//DESTROY RESTAURANT ROUTE
app.get('/restaurants/:restID', function(req, res) {
    Controllers.deleteRestaurant(req, res)
});

//CREATE NEW RESTAURANT ROUTE
app.post('/restaurants/new', function(req, res) {
    Controllers.newRestaurant(req, res)
});

//EDIT ONE RESTAURANT ROUTE
app.put('/restaurants/:id/edit', function(req, res) {
    Controllers.updateRestaurant(req, res);
});

//ADD REVIEW TO RESTAURANT ROUTE
app.post('/restaurants/:restID/review', function(req, res) {
    Controllers.postRate(req, res);
});



}

