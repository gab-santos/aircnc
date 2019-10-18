const User = require("../models/User.model");
const Spot = require("../models/Spot.model");
const Booking = require("../models/Booking.model");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    try {
      if (!(await User.findById(user_id)))
        return res.status(400).json({ message: "User does not exists!" });

      if (!(await Spot.findById(spot_id)))
        return res.status(400).json({ message: "Spot does not exists!" });

      const booking = await Booking.create({
        date,
        user: user_id,
        spot: spot_id
      });

      await booking
        .populate("user")
        .populate("spot")
        .execPopulate();

      //
      // Após o mobileUser fazer uma reserva é verificado se o webUser(dono do spot) 
      // está conectado, caso estiver, é emitido para ele os dados da reserva.
      const ownerSocket = req.connectedUsers[booking.spot.user];
      if (ownerSocket) {
        req.io.to(ownerSocket).emit("booking_request", booking);
      }
      //

      return res.status(200).json(booking);
      //
    } catch (error) {
      return res.status(400).json({ message: "Error create booking!" });
    }
  }
};
