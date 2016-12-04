const db = require ('./db');

// add record to db
exports.create = (payload, err, success) => {

  db.car.create(payload).then(success).catch(err);
}

// get all record from db
exports.findAll = (err, success) => {

  db.car.findAll().then(success).catch(err);
}

exports.find = (payload, err, success) => {
  db.car.find({
    where:{
      id: payload.id,

    },
    // find all related in sequelize

    include:[{
      all:true,
      nested:true,

    }],

  }).then(success).catch(err);
}

// update record
exports.update = (payload, err, success) => {
  db.car.find({
    where:{
      id: payload.id,
    },

  }).then( (existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);

  }).catch(err);
}


// destroy record by id
exports.destroy = (payload, err, success) => {
  db.car.destroy({
    where:{
      id: payload.id,
    },

  }).then(success).catch(err);
}
