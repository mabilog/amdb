const jikan = require("@mateoaranda/jikanjs");
const jikanjs = require("@mateoaranda/jikanjs");

const getAnime = async (req, res) => {
  try {
    const { mal_id } = req.params;
    const anime = await jikan.loadAnime(mal_id);
    res.status(200).json({
      status: 200,
      data: anime,
      message: "Successfully provided anime request",
    });
  } catch (err) {
    console.error(err);
  }
};
const getSchedule = async (req, res) => {
  try {
    const { day } = req.params;
    const animes = await jikanjs.loadSchedule(day);

    res.status(200).json({
      status: 200,
      data: animes,
      message: `Today's day of the week is ${day}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 500,
      message: "Something went wrong when retrieving recent episodes",
    });
  }
};
module.exports = { getAnime, getSchedule };
