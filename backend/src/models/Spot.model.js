const { Schema, model } = require("mongoose");

const SpotSchema = new Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function () {
  return `http://localhost:3000/files/${this.thumbnail}`;
});

module.exports = model("Spot", SpotSchema);
