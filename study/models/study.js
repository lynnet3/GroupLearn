const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studieschema = new Schema({
  subject: { type: String, required: true },
  location: { type: String, required: true },
  content: String,
  date: { type: Date, default: Date.now },
  User: {
    
//add in stuff
  }
});

const Study = mongoose.model("Study", studieschema);

module.exports = Study;