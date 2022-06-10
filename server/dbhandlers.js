"use strict";

const { MongoClient, ObjectId, MongoTailableCursorError } = require("mongodb");
require("dotenv").config();

const { MONGO_URI, DATABASE_NAME } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUsers = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db(DATABASE_NAME);
    const result = await db.collection("users").find().toArray();

    result
      ? res.status(200).json({
          status: 200,
          result,
          message: "Successfully requested users collection",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting users",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting users",
    });
  }
};

const getUser = async (req, res) => {
  const { _id } = req.params;
  try {
    console.log(_id);
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db(DATABASE_NAME);

    const user = await db.collection("users").findOne({ _id: ObjectId(_id) });

    // console.log(user);

    user
      ? res.status(200).json({
          status: 200,
          user,
          message: "Successfully requested user info",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting a user",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting a user",
    });
  }
};

const addFavorite = async (req, res) => {
  const { mal_id, user_id } = req.body;
  try {
    console.log(req.body);
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db(DATABASE_NAME);

    const user = await db
      .collection("users")
      .updateOne({ _id: ObjectId(user_id) }, { $push: { favorites: mal_id } });

    console.log(user);

    user
      ? res.status(200).json({
          status: 200,
          user,
          message: "Successfully requested user info",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting a user",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting a user",
    });
  }
};

const removeFavorite = async (req, res) => {
  const { mal_id, user_id } = req.query;
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();

    const db = client.db(DATABASE_NAME);

    const user = await db
      .collection("users")
      .updateOne({ _id: ObjectId(user_id) }, { $pull: { favorites: mal_id } });

    console.log(user);

    user
      ? res.status(200).json({
          status: 200,
          user,
          message: "Successfully requested user info",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting a user",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting a user",
    });
  }
};
module.exports = {
  getUsers,
  getUser,
  addFavorite,
  removeFavorite,
};
