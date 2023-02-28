const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/api', UserController.index)//test route
    app.post('/api/login', UserController.findOne)//find one
    app.get('/api/users', UserController.findAll)//find all
    app.post('/api/register', UserController.create)//create route
    app.put('/api/user/edit/:id', UserController.updateOne)//update one route
    app.delete('/api/user/:id', UserController.deleteOne)//delete one route
    app.get('/api/favorites/:id', UserController.getAllFavorites)//get all favorites
    app.post('/api/favorites/:id', UserController.addFavorite)//add favorite
}