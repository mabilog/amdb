const fetch = require("node-fetch");

const getRecommendation = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.jikan.moe/v4/recommendations/anime"
    );
    const animes = await response.json();

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
  getRecommendation,
  getManga,
};
