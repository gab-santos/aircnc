const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: String
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
