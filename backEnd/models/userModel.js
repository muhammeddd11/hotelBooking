const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You should have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "You should have an email"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "You shoulld have a password"],
    minlength: [6, "Password should be greater than or equal 6 characters"],
  },
  role: {
    type: String,
    enum: ["admin", "user", "vipuser"],
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
