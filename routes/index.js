const home = require("./home");
const quiz = require("./quiz");
const path = require("path")
const constructorMethod = (app) => {
  app.use("/quiz", quiz);
  app.use("/", home);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
