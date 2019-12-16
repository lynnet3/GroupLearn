const db = require("../models");

// Defining methods for the studyController
module.exports = {
  findAll: function(req, res) {
    db.Study
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Study
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Study
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Study
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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
    console.log(req.body.params.q.userName)
    console.log(req.body.params.q.password)
    //console.log(JSON.parse(req.query.q).userName)
    db.User
      .find({userName: req.body.params.q.userName, password: req.body.params.q.password})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    db.User.find({
        userName: req.body.userName
    }).then(function(results) {
      if (results.length > 0) {
        console.log("Results")
        console.log(results)
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
