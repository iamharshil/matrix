const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Name is required"],
        },
        lastName: {
            type: String,
            required: [true, "Name is required"],
        },
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: [true, "Username already exists"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email must be unique"],
        },
        password: {
            type: String,
            required: [true, "Passport is required"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
