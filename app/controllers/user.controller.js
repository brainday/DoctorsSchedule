const db = require("../models");
const { json } = require("sequelize");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");

};

exports.api = (req, res) => {
  const data = require('../data/data.json');
  res.send(data)
};

exports.api2 = (req, res) => {
  const data = require('../data/data2.json');
  res.send(data)
};

exports.json = (req, res) => {  
  const oid = req.params.oid;
  var condition = oid ? { oid: { [Op.eq]: `${oid}` } } : null;


      db.Company.findAll({ 
        where: condition,
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
        if (data.length != 0) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find MO with oid=${oid}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};