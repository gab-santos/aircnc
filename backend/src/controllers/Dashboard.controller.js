const Spot = require("../models/Spot.model");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    try {
      const spots = await Spot.find({ user: user_id });

      return res.status(200).json(spots);
      //
    } catch (error) {
      return res.status(400).json({ message: "List spots error!" });
    }
  }
};
