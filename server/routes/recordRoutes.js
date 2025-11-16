const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { createRecord, getRecords, getStats } = require("../controllers/recordController");

router.post("/", protect, createRecord);
router.get("/", protect, getRecords);
router.get("/stats", protect, getStats);

module.exports = router;
