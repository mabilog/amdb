"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI, DATABASE_NAME } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
