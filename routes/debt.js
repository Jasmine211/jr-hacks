const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.render("debt", {title: "Managing Your Debt"})
})
module.exports = router;
