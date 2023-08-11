const mongoose = require("mongoose");
const bcrypt=require("bcrypt")
const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);
// userModel.methods.matchPassword = async function (enteredpassword) {
//     console.log(enteredpassword)
//   return await bcrypt.compare(enteredpassword, this.password);
// };
userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("user", userModel);
module.exports = User;
