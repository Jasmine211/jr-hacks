const express = require("express");
const router = express.Router();
const data = require("../data");
const helpers = require("../helpers");

router.get("/", async (req, res) => {
  return res.render("debt", {title: "Managing Your Debt"})
})
module.exports = router;
