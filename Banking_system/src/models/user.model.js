const { CaseLower } = require("lucide-react");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userschema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required for creating a user"],
      trim: true, // trim means no extraspace use when we create a account by email
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ], // formatcheck like start with letter then number then @ then gmail.com
      unique: [true, "Email already exists"], // third backet use for write massage if the email is not unique
    },
    name: {
      type: String,
      required: [true, "Name is required for creating a account"],
    },

    password: {
      type: String,
      required: [true, "password is required for create an account "],
      minlength: [6, "password should be contain more than 6 character"],
      select: false, // by false the database are not showing this until we say 4
    },
  },
  { timestamps: true }, // it shows when the user login and when the user last updated their accout
);

// middelware
userschema.pre("save", async function () {
  // this pre play a function and this function make the password into hash if the password chnage or create
  if (!this.isModified("password")) {
    return;
  }

  // make a password in a hash number
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  return;
});

// comapre the password
userschema.methods.comparePassword = async function (password) {
  // hash comapare with database password and then return
  return await bcrypt.compare(password, this.password);
};
const userModel = mongoose.model("userdata", userschema);

module.exports = userModel;
