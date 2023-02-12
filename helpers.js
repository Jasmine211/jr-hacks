const { ObjectId } = require("mongodb");
let checkId = (id) => {
    if (!id) throw "id is undefined";
    if (id.length === 0)
      throw "id cannot be an empty string or just spaces";
   
    if (!ObjectId.isValid(id)) throw "invalid object ID";
    return id;
  };
module.exports = {
    checkId
}