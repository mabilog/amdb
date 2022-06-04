import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import jikanjs = require()
const Anime = () => {
  const [first, setfirst] = useState();

  const { mal_id } = useParams();
  // useEffect(async() => {
  //   // console.log(mal_id);
  //   const anime = await
  // }, []);
  return <div>Anime</div>;
};

export default Anime;
