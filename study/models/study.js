const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studySchema = new Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  location: { type: String, required: true },
  email: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now }
});

const Study = mongoose.model("Study", studySchema);

module.exports = Study;