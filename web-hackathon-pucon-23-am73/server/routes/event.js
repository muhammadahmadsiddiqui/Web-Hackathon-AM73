const express = require("express");
const router = express.Router();
const {
    createEvent,
    updateEvent,
    deleteEvent,
    showAllEvents,
    showEventById } = require("../controllers/Events.js");

router.post("/createEvent", createEvent);
router.get("/allEvents", showAllEvents);
router.get("/:id", showEventById);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

// router.get("/getSavedEvents", getSavedEvents);
// router.get("/getEventsByUserId/:userId", getEventsByUserId);
// router.post("/searchBycategory/:category", searchBycategory);
// router.get("/saveEventinFavourites", saveEventinFavourites);

module.exports = router;