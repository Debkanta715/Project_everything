const { Currency } = require("lucide-react");
const { applyTimestamps } = require("./user.model");
// const { mongo } = require("mongoose");

const mongoose = require("mongoose");

const accountschema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // it said to crate a schema of a user by id which is exits in user
      ref: "userdata", // same name given in the usermodel
      required: [true, "Account must be associated with a user"],

      //endpoints for the better searchh the account

      //here use b+tree datastructure for searching
      index: true, // index for search the user account because user can have multiple account and for particular account we need this index
    },

    status: {
      type: String,
      enum: {
        // multiple values we have then use only three can we use
        values: ["ACTIVE", "FROZEN", "CLOSED"],
        message: "status can be either ACTIVE , FROZEN or CLOSED",
      },
      default: "ACTIVE",
    },
    Currency: {
      type: String,
      required: [true, "Currency is required for creating an account"],
      default: "INR",
    },
  },
  {
    timestamps: true, // Enable automatic createdAt and updatedAt fields
  },
);

// this is compound index
accountschema.index({ user: 1, status: 1 }); // another index find way for the basis on the status also

const accountmodel = mongoose.model("accountdata", accountschema);

module.exports = accountmodel;
