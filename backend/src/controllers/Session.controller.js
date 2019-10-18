const User = require("../models/User.model");

// index = Mostrar uma lista de sessions
// show = Mostrar uma única session
// store = Criar uma session
// update = Alterar uma session
// destroy = Deletar uma session

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({ email });
      }

      return res.status(201).json(user);
      //
    } catch (error) {
      return res.status(401).json("Session error!");
    }
  }
};
