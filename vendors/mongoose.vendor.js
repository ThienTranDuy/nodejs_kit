'use strict';

const mongoose = require('mongoose');
const {Config, Options} = require('../constants/mongoose.constant')

const db = mongoose.connection;

/**
 * Connected handler
 */
const connect = async () => {
  try {
    const dbInstance = await mongoose.connect(Config._Database, Options);
    if (dbInstance == null) { throw "Connect fail" }
    console.log("Database connected")

    // Mongoose Event
    db.on('connected', function () { console.log("Mongoose default connection is open to ", Config._Database); });
    db.on('error', function (err) { console.log(err); });
    db.on('disconnected', function () { console.log("Mongoose default connection is disconnected"); });

    process.on('SIGINT', function () {
      db.close(function () {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0)
      });
    });
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  connect,
  db
}
