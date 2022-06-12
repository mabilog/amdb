const fetch = require("node-fetch");

const getAnime = async (req, res) => {
  const { mal_id } = req.params;
  try {
    const animeResponse = await fetch(
      `https://api.jikan.moe/v4/anime/${mal_id}/`
    );
    const anime = await animeResponse.json();

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
    const response = await fetch(
      `https://api.jikan.moe/v4/schedules/${day}?limit=100`
    );
    const animes = await response.json();

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
    const response = await fetch("https://api.jikan.moe/v4/seasons/now");
    const animes = await response.json();

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
const getAnimeSearch = async (req, res) => {
  const { q } = req.params;
  // console.log();
  // console.log(req.query);
  try {
    const animesRes = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`);
    const animes = await animesRes.json();
    animes
      ? res.status(200).json({
          status: 200,
          animes,
          message: "Successfully requested anime details",
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
module.exports = {
  getAnime,
  getAnimeQuery,
  getSchedule,
  getCurrentSeason,
  getAnimeSearch,
};
