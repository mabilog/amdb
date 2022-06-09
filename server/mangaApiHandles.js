const fetch = require("node-fetch");

const getManga = async (req, res) => {
  const { mal_id } = req.params;
  try {
    const mangaResponse = await fetch(
      `https://api.jikan.moe/v4/manga/${mal_id}`
    );
    const manga = await mangaResponse.json();

    manga
      ? res.status(200).json({
          status: 200,
          manga,
          message: "Successfully provided manga request",
        })
      : res.status(500).json({
          status: 500,
          message: "Something went wrong while requesting manga details",
        });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      status: 500,
      message: "Something wrong while requesting manga details",
    });
  }
};

const getMangaSearch = async (req, res) => {
  const { q } = req.params;
  console.log(q);
  try {
    const mangasRes = await fetch(`https://api.jikan.moe/v4/manga?q=${q}`);
    const mangas = await mangasRes.json();
    mangas
      ? res.status(200).json({
          status: 200,
          mangas,
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

module.exports = { getManga, getMangaSearch };
