const { authenticate } = require('../config/jwt.config');
const UserController = require('../controllers/user.controller');
// const { User } = require('../models/user.model');

module.exports = (app) => {
    app.get('/api/allUsers', authenticate, UserController.index)
    app.get('/api/cookie', UserController.cookie)
    app.post('/api/register', UserController.register)
    app.post('/api/login', UserController.login)
    app.get('/api/logout', UserController.logout)
    app.get('/api/getUser', UserController.getUser)
    app.get('/api/favorites/:id', UserController.getAllFavorites)//get all favorites
    app.post('/api/favorites/:id', UserController.addFavorite)//add favorite
    app.delete('/api/favorites/:id', UserController.deleteFavorite)
}
    // app.get('/api', UserController.index)//test route
    // app.get('/api/login/:username', UserController.findOne)//find one
    // app.get('/api/users', UserController.findAll)//find all
    // app.post('/api/register', UserController.create)//create route
    // app.put('/api/user/edit/:id', UserController.updateOne)//update one route
    // app.delete('/api/user/:id', UserController.deleteOne)//delete one route

    
