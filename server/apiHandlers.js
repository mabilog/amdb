const jikan = require("@mateoaranda/jikanjs");
const jikanjs = require("@mateoaranda/jikanjs");

const fetch = require("node-fetch");
// import fetch from "node-fetch";
const getAnime = async (req, res) => {
  const { mal_id } = req.params;
  console.log(mal_id);
  try {
    const animeResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${mal_id}/`
    );
    const anime = await animeResponse.json();

    console.log(anime);
    anime
      ? res.status(200).json({
          status: 200,
          anime,
          message: "Successfully provided anime request",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting anime details",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting anime details",
    });
  }
};
const getAnimeQuery = async (req, res) => {
  const { mal_id, query } = req.params;
  try {
    const queryResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${mal_id}/${query}`
    );
    const queryData = await queryResponse.json();
    console.log(queryData);
    queryData
      ? res.status(200).json({
          status: 200,
          queryData,
          message: `Successfully provided ${query} request`,
        })
      : res.status(500).json({
          status: 500,
          message: `Something went wrong while requesting ${query} details`,
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: `Something went wrong while requesting ${query} details`,
    });
  }
};

const getSchedule = async (req, res) => {
  try {
    const { day } = req.params;
    const animes = await jikanjs.loadSchedule(day);

    animes
      ? res.status(200).json({
          status: 200,
          data: animes,
          message: `Today's day of the week is ${day}`,
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong when retrieving recent episodes",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong when retrieving recent episodes",
    });
  }
};

const getCurrentSeason = async (req, res) => {
  try {
    const animes = await jikanjs.loadCurrentSeason();

    animes
      ? res.status(200).json({
          status: 200,
          data: animes,
          message: "Successfully requested current season animes",
        })
      : res.status(500).json({
          status: 500,
          message:
            "Something went wrong while requesting current season animes",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting current season animes",
    });
  }
};

const getRecommendation = async (req, res) => {
  try {
    const animes = await jikanjs.loadRecommendations("anime");

    animes
      ? res.status(200).json({
          status: 200,
          data: animes,
          message: "Successfully requested anime recommendations",
        })
      : res.status(500).json({
          status: 500,
          message:
            "Something went wrong while requesting anime recommendations",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting anime recommendations",
    });
  }
};

const getManga = async (req, res) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/manga/47825/full`);
    const manga = await response.json();
    console.log(manga);

    manga
      ? res.status(200).json({
          status: 200,
          manga,
          message: "Successfully requested manga details",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting manga details",
        });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong while requesting manga details",
    });
  }
};
module.exports = {
  getAnime,
  getAnimeQuery,
  getCurrentSeason,
  getSchedule,
  getRecommendation,
  getManga,
};
