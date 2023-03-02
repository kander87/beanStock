const { User } = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Favorite } = require('../models/favorite.model')
const { model } = require('mongoose');
// const { User } = require('../modules/user.module')

const generateID = () => Math.random().toString(36).substring(2, 10);

module.exports.register=(req,res) => {
    User.create(req.body)
    .then(user => {
        console.log(process.env.FIRST_SECRET_KEY)
        const userToken =jwt.sign({id:user._id}, process.env.FIRST_SECRET_KEY); 
        res
            .cookie("usertoken", userToken, {httpOnly:true})
            .json({ msg: "success!", user: user, id:user._id, firstName: user.firstName });

    })
    .catch(err => {
        console.log("in err" + err)
        res.status(400).json(err);
    })
}

module.exports.cookie =(req,res) => {
    res.cookie("test", "test", {httpOnly:true}).json("success")
}

module.exports.index =(req,res) => {
    User.find()
        .then(users => res.cookie("test", "test", {httpOnly:true}).json(users))
        .catch(err => res.json(err))
}

module.exports.login = async (req,res) => {
    const user = await User.findOne({userName:req.body.userName})

    if (user === null) {
        return res.sendStatus(400)
    }

    const correctPassword = await bcrypt.compare(req.body.password,user.password)


    if(!correctPassword){
        return res.sendStatus(400)
    }

    const userToken = jwt.sign({id:user._id}, process.env.FIRST_SECRET_KEY)

    res
        .cookie("usertoken", userToken, {httpOnly:true})
        .json({msg: "success!", id:user._id, firstName:user.firstName})
}


module.exports.logout = (req,res) => {
    res.clearCookie('usertoken')
    res.sendStatus(200)
}

module.exports.getUser = (req,res) => {
    const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true})
    User.findOne({_id: decodedJwt.payload.id})
        .then(oneUser => res.json(oneUser))
        .catch(err => res.status(500).json(err))
    // if (result.length === 0) {
    //     //👇🏻 creates the structure for the user👇🏻   👇🏻   👇🏻    👇🏻   👇🏻👇🏻👇🏻👇🏻👇🏻
    //     const newUser = { id: generateID(), email, password, username, tel };
    //     //👇🏻 Adds the user to the array of users
    //     users.push(newUser);
    //     //👇🏻 Returns a message👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻👇🏻
    //     return res.json({
    //         message: "Account created successfully!",
    //     });


// module.exports.create = (req,res)=> {
// //     User.create(req.body)
// //     .then(newUser => {
// //         return res.json(newUser)
// //     }).catch(err => {
// //         return res.status(400).json(err)
// //     })
// // }
//     // Get the user's credentials
    

//     const {userName, password, confPassword, firstName, lastName  } = req.body;
    
//     fetch(`http://localhost:8000/login/${userName}`)
//     // User.findOne({ userName: req.userName })
//         .then(User => {
//             return res.json(User)
//         })
//         .catch(err => {
//             return res.json(err)
//         })


//     // Checks if there is an existing user with the same username
//     // let result = users.filter((user) => user.userName === userName);
//     // console.log(result)
//     if (User ==0){
//         // console.log("passwords match")
//         // if (result.length === 0) {
//             // console.log(req.body)
//         User.create(req.body)
//         .then(user => {
//             res.json({user,
//             message: "Account created successfully!",
//         })})
//         .catch(err => res.status(400).json(err))
//         } else{
//             res.json({
//             error_message: "User already exists",
//             });
//         }
//     // } else {
//     //     console.log("bruh pws need to match")
//     //     res.json({
//     //         error_message: "Passwords do not match!",
//     //     });
//     // }
// }
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
//     const {username,password} =req.body

//     let result = users.filter(
//         (user) => user.username === username && user.password === password
//     );

//     if (result.length !== 1) {
//         return res.json({
//             error_message: "Incorrect credentials",
//         });
//     }

//     res.json({
//         message: "Login successfully",
//         data: {
//             username: result[0].username,
//         },
//     });


    User.findOne({ userName: req.params.userName })
        .then(user => {
            res.json({ user })
        })
        .catch((err) => {
            res.json({ message: 'Something went one wrong', error: err })
        });
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

// ========================FAVORITE CONTROLLER ===========================
module.exports.getAllFavorites = (req, res) => {
    // Favorite.find()
    // .then((favoritesList) => {
    //     res.json(favoritesList)
    // })
    // .catch((err) => {
    //     res.json({ message: 'Something went all wrong', error: err })
    // });
    User.find({ _id: req.params.id}).populate("favorites")
    .then((favoriteList) => {
        res.json(favoriteList)
    })
    .catch((err) => {
        res.json({ message: 'Something went all wrong', error: err })
    })
}

module.exports.addFavorite = async (req, res) => {
    const {id} = req.params 
    req.body.owner = id
    Favorite.create(req.body)
    .then(fav => {
        res.json({fav,
        message: "Added to Favorites!",
    })})
    .catch(err => res.status(400).json(err))
}