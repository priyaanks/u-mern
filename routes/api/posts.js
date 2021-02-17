const express = require("express");

const router = express.Router();

// Routes

// @route     GET api/posts
// @desc      Test route
// @access    Public
router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;