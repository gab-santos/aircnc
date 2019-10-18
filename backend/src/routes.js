const routes = require("express").Router();
const multer = require("multer");

const uploadConfig = require("./config/upload");
const SessionController = require("./controllers/Session.controller");
const SpotController = require("./controllers/Spot.controller");
const DashboardController = require("./controllers/Dashboard.controller");
const BookingController = require("./controllers/Booking.controller");
const ApprovalController = require("./controllers/Approval.controller");
const RejectionController = require("./controllers/Rejection.controller");

routes.get('/hw', (req, res) => {
  return res.status(200).json({ success: "Hello World :)" })
})

routes.post("/sessions", SessionController.store);

const upload = multer(uploadConfig);
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/booking/:booking_id/approvals", ApprovalController.store);
routes.post("/booking/:booking_id/rejections", RejectionController.store);

module.exports = routes;
