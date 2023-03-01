const mongoose = require('mongoose')

const FavoritesSchema = new mongoose.Schema({
    name: String,
    price: Number,
    change: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
module.exports.Favorite = mongoose.model("Favorite", FavoritesSchema);