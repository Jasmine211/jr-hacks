const home = require("./home");
const quiz = require("./quiz");
const budget = require("./budgeting");
const credit = require("./credit");
const debt = require("./debt");
const path = require("path")
const constructorMethod = (app) => {
  app.use("/quiz", quiz);
  app.use("/debt", debt);
  app.use("/credit", credit);
  app.use("/budget", budget);
  app.use("/", (req, res) => {
    res.sendFile(path.resolve("static/home.html"));
  } );
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
