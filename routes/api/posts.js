const express = require("express");
const router = express.Router();

// @route       GET api/Posts
// @desc        Test Router for Posts
// @access      Public
router.get("/", (req, res) => res.send("Posts Route.. "));

module.exports = router;
