const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: false,
    trim: true,
  },
  country: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: false,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGfoR24g82fsdyUuCCIb672C6sh1hQStEKw&usqp=CAU",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: [true, "User Phone Number is required"],
  },
  created_date: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", UsersSchema);
