"use strict";

const PORT = 8000;

const express = require("express");
const morgan = require("morgan");

// const { getRecommendation, getManga } = require("./apiHandlers");

const {
  getAnime,
  getAnimeQuery,
  getSchedule,
  getCurrentSeason,
  getAnimeSearch,
  getFavorites,
} = require("./animeApiHandlers");

const { getManga, getMangaSearch } = require("./mangaApiHandles");

const {
  getUsers,
  getUser,
  addFavorite,
  removeFavorite,
} = require("./dbhandlers");

express()
  .use(morgan("tiny"))
  .use(express.json())

  .get("/animeApi/getAnime/:mal_id", getAnime)
  .get("/animeApi/getAnime/:mal_id/:query", getAnimeQuery)

  .get("/animeApi/getSchedule/:day", getSchedule)
  .get("/animeApi/getCurrentSeason", getCurrentSeason)
  .get("/animeApi/getAnimeSearch/:q", getAnimeSearch)
  .post("/animeApi/getFavorites", getFavorites)

  .get("/mangaApi/getManga/:mal_id", getManga)
  .get("/mangaApi/getMangaSearch/:q", getMangaSearch)

  .get("/dbApi/getUser/:_id", getUser)
  .get("/dbApi/getUsers", getUsers)

  .patch("/dbApi/addFavorite/", addFavorite)
  .patch("/dbApi/removeFavorite/", removeFavorite)
  .get("*", (req, res) => {
    res.status(400).json({
      status: 400,
      message: "Well this is awkward...",
    });
  })

  .listen(8000, () => console.log(`Listening to port ${PORT}`));
