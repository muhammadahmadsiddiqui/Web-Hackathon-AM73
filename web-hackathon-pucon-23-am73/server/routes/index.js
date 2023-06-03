const router = require("express").Router();
const authRoutes = require("./authUser");
const helpRouter = require("./Help");
const eventRouter = require("./event");

router.use("/auth", authRoutes);
router.use("/email", helpRouter);
router.use("/event", eventRouter);

module.exports = router;