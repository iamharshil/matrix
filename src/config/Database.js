const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

mongoose.connect(URI, (error) => {
    if (error) throw error;
    console.log("Database connected.");
});
