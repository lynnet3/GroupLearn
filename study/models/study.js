const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studieschema = new Schema({
  subject: { type: String, required: true },
  location: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Study = mongoose.model("Study", studieschema);

module.exports = Study;