const db = require("../models");
const { json } = require("sequelize");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");

};

exports.api = (req, res) => {
  const data = require('../data/data.json');
  res.send(data)
};

exports.json = (req, res) => {  
      db.Company.findAll({ 
        include: [
              { model: db.Departament,
                separate: true },
              { model: db.Departament,
                include: [
                  { model: db.Specialist },
                  { model: db.Specialist,
                  include: db.Schedule,
                  separate: true }
                ],
                separate: true }
          ]
       })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
    //   db.Company.findAll({
    //   
    // )
  
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};