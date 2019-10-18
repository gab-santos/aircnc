const User = require("../models/User.model");
const Spot = require("../models/Spot.model");

const fs = require("fs");
const path = require("path");

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    try {
      const spots = await Spot.find({ techs: tech });

      return res.status(200).json(spots);
      //
    } catch (error) {
      return res.status(400).json({ message: "List spots error!" });
    }
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, price, techs } = req.body;
    const { user_id } = req.headers;

    try {
      const user = await User.findById(user_id);

      if (!user) {
        fs.unlinkSync(
          path.resolve(__dirname, "..", "..", "uploads", `${filename}`)
        );
        return res.status(400).json({ message: "User does not exist!" });
      }

      const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        company,
        price,
        techs: techs.split(",").map(tech => tech.trim())
      });

      return res.status(201).json(spot);
      //
    } catch (error) {
      return res.status(400).json({ message: "Create spot error!" });
    }

    return res.json({ ok: true });
  }
};
