const getTest = (req, res) => {
  // res.status(200).json({
  //   status: 200,
  //   data: "hello from the other side",
  // });
  res.status(200).json({ status: 200, message: "hello from the other side" });
};
module.exports = { getTest };
