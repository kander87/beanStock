const { model } = require('mongoose');
const { User } = require('../modules/user.module')

const users = [];
const generateID = () => Math.random().toString(36).substring(2, 10);


module.exports.index = (req, res) => {
    res.json({
        message: "Hello from users"
    })
}

module.exports.create = (req,res)=> {
    // Get the user's credentials👇🏻
    const {username } = req.body;

    // Checks if there👇🏻 is an existing user with the same username
    let result = users.filter((user) => user.username === username);

    // if no 👇🏻user with that username👇🏻
    if (result.length === 0) {
        User.create(req.body)
        .then(user => {
            res.json({user,
            message: "Account created successfully!",
        })})
        .catch(err => res.status(400).json(err))
    }

    // if (result.length === 0) {
    //     //👇🏻 creates the structure for the user👇🏻   👇🏻   👇🏻    👇🏻   👇🏻👇🏻👇🏻👇🏻👇🏻
    //     const newUser = { id: generateID(), email, password, username, tel };
    //     //👇🏻 Adds the user to the array of users
    //     users.push(newUser);
    //     //👇🏻 Returns a message👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
    //     return res.json({
    //         message: "Account created successfully!",
    //     });

    // Runs if a user exists
    res.json({
        error_message: "User already exists",
});
}

module.exports.findAll = (req, res) => {

    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json({ message: 'Something went all wrong', error: err })
        });
}

module.exports.findOne = (req, res) => {
    const {username,password} =req.body

    let result = users.filter(
        (user) => user.username === username && user.password === password
    );

    if (result.length !== 1) {
        return res.json({
            error_message: "Incorrect credentials",
        });
    }

    res.json({
        message: "Login successfully",
        data: {
            username: result[0].username,
        },
    });

    // User.findOne({ _id: req.params.id })
    //     .then(user => {
    //         res.json({ user })
    //     })
    //     .catch((err) => {
    //         res.json({ message: 'Something went one wrong', error: err })
    //     });
}

module.exports.updateOne = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedUser => {
            res.json({user: updatedUser})
        })
        .catch((err) => {
            res.status(400).json(err)
        });
}

module.exports.deleteOne = (req, res)=> {
    User.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result })
    })
    .catch((err) => {
        res.json({ message: 'Something went  wrong', error: err })
    });
}