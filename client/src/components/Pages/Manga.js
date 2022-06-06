import { useEffect } from "react";

const Manga = () => {
  useEffect(() => {
    const fetchmanga = async () => {
      fetch(`https://api.jikan.moe/v4/manga/47825/full`)
        .then((res) => res.json())
        .then((data) => console.log(data));
    };
    fetchmanga();
  }, []);
  return <div>manga</div>;
};

export default Manga;
