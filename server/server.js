"use strict";

const PORT = 8000;

const express = require("express");
const morgan = require("morgan");

const { getTest } = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .get("/api/test", getTest)

  .get("*", (req, res) => {
    res.status(400).json({
      status: 400,
      message: "Well this is awkward...",
    });
  })

  .listen(8000, () => console.log(`Listening to port ${PORT}`));
