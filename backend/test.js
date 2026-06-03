const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:munna9182@cluster0.lxigatx.mongodb.net/mern-machine-test")
.then(() => console.log("Connected OK"))
.catch(err => console.log("Error:", err.message));