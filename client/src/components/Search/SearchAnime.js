import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";

const SearchAnime = () => {
  const { search } = useContext(GlobalContext);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`/animeApi/getAnimeSearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setAnimes(data.animes.data);
        console.log(data);
      });
  }, [search]);

  return <div>SearchAnime</div>;
};

export default SearchAnime;
