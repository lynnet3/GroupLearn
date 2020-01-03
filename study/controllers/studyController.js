const db = require("../models");

// Defining methods for the studyController
module.exports = {
  findCookie: function(req, res) {
console.log("It runs")
if(req.session.userName) {
  console.log("cookie"),
  console.log(req.session.userName),
    res.json(req.session)
}
else {
  console.log("no username saved")
}
  },
  create: function(req, res) {
    db.Study
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllPosts: function(req, res) {
    console.log("findAllPosts")
    db.Study
    .find({})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Study
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
   findUser: function(req, res) {
    console.log("Session: ___l")
    const response = {session: req.session}
    console.log(req.body)
    db.User
      .find({userName: req.body.params.q.userName, password: req.body.params.q.password})
      .sort({ date: -1 })
      .then(dbModel => {
      response.dbModel = dbModel,
      req.session.userName = response.dbModel[0].userName,
      req.session.email = response.dbModel[0].email,
      res.json(response);
    }).catch(err => res.status(422).json(err));
  },
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    console.log("Session: ___c")
    console.log(req)
    db.User.find({
        userName: req.body.userName
    }).then(function(results) {
      if (results.length > 0) {
        res.send("Username taken, please try something else");
      } else {
        db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      }
    });
    
  },
};
