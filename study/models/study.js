const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studieschema = new Schema({
  subject: { type: String, required: true },
  location: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: {
  userName: { type: String, required: true },
  email: { type: String, required: true },
  }
});

const Study = mongoose.model("Study", studieschema);

module.exports = Study;