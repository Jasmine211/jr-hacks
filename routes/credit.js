const express = require("express");
const router = express.Router();
const data = require("../data");
const helpers = require("../helpers");

router.get("/", async (req, res) => {
  return res.render("credit", {title: "Building Your Credit"})
})
module.exports = router;

