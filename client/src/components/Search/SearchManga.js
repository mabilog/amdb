import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext";

const SearchManga = () => {
  const { search } = useContext(GlobalContext);
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    fetch(`/mangaApi/getMangaSearch/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setMangas(data.mangas.data);
        console.log(data);
      });
  }, [search]);
  return <div>SearchManga</div>;
};

export default SearchManga;
