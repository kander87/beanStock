const UserController = require('../controllers/user.controller');


module.exports = (app) => {
    app.get('/api', UserController.index)//test route
    app.post('/api/login', UserController.findOne)//find one
    app.get('/api/users', UserController.findAll)//find all
    app.post('/api/register', UserController.create)//create route
    app.put('/api/user/edit/:id', UserController.updateOne)//update one route
    app.delete('/api/user/:id', UserController.deleteOne)//delete one route
}