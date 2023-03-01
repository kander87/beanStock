const express = require("express");
const cors = require("cors")
const port = 8000;

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors())
const dotenv = require("dotenv");
dotenv.config()

require("./config/mongoose.config");
require("./routes/user.routes")(app); // may need to adjust routes here

// must be at the bottom
app.listen(port, () => console.log(`Listening on port: ${port}`))