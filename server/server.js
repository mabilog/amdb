"use strict";

const PORT = 8000;

const express = require("express");
const morgan = require("morgan");

const {
  getAnime,
  getAnimeQuery,
  getAnimeCharacters,
  getCurrentSeason,
  getSchedule,
  getRecommendation,
  getManga,
  getSearch,
} = require("./apiHandlers");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .get("/animeApi/getAnime/:mal_id", getAnime)
  .get("/animeApi/getAnime/:mal_id/:query", getAnimeQuery)
  // .get("/animeApi/getAnimeCharacters/:mal_id/", getAnimeCharacters)

  .get("/animeApi/getSchedule/:day", getSchedule)
  .get("/animeApi/getCurrentSeason", getCurrentSeason)
  .get("/animeApi/getRecommendation", getRecommendation)
  .get("/animeApi/getManga", getManga)

  .get("/animeApi/getSearch/:q", getSearch)
  .get("*", (req, res) => {
    res.status(400).json({
      status: 400,
      message: "Well this is awkward...",
    });
  })

  .listen(8000, () => console.log(`Listening to port ${PORT}`));
