const express = require("express");
var session = require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const TWO_HOURS = 1000 * 60 * 60 * 2;
const SESSION_LENGTH = TWO_HOURS;
//const NODE_ENV = "development"
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/studygrouplist");

app.use(session({
  name: "SESS_ID",
  secret: "password",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: SESSION_LENGTH,
    sameSite: true,
    secure: false, //change to true in production, needs https to work.
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

// Add routes, both API and view
app.use('/', routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});