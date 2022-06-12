"use strict";

const PORT = 8000;

const express = require("express");
const morgan = require("morgan");

const {
  getAnime,
  getAnimeQuery,
  getSchedule,
  getCurrentSeason,
  getAnimeSearch,
} = require("./animeApiHandlers");

const { getUsers, getUser, toggleFavorite } = require("./dbhandlers");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .get("/animeApi/getAnime/:mal_id", getAnime)
  .get("/animeApi/getAnime/:mal_id/:query", getAnimeQuery)
  .get("/animeApi/getSchedule/:day", getSchedule)
  .get("/animeApi/getCurrentSeason", getCurrentSeason)
  .get("/animeApi/getAnimeSearch/:q", getAnimeSearch)

  .get("/dbApi/getUser/:_id", getUser)
  .get("/dbApi/getUsers", getUsers)

  .patch("/dbApi/toggleFavorite/", toggleFavorite)

  .get("*", (req, res) => {
    res.status(400).json({
      status: 400,
      message: "Well this is awkward...",
    });
  })

  .listen(8000, () => console.log(`Listening to port ${PORT}`));
