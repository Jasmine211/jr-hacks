const home = require("./home");

const constructorMethod = (app) => {
  app.use("/", home);
  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};
module.exports = constructorMethod;