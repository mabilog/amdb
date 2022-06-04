const jikanjs = require("@mateoaranda/jikanjs");

const getTest = async (req, res) => {
  // res.status(200).json({
  //   status: 200,
  //   data: "hello from the other side",
  // });
  try {
    const { mal_id } = req.params;
    console.log(req.query);
    const anime = await jikanjs.loadAnime(mal_id);
    // const anime = mal_id;
    console.log(anime);

    res
      .status(200)
      .json({ status: 200, data: anime, message: "hello from the other side" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: "Something happened",
    });
  }
};

module.exports = { getTest };
