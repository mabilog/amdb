import Anime from "./Anime";
import AnimeProvider from "./AnimeContext";
const index = () => {
  return (
    <AnimeProvider>
      <Anime />
    </AnimeProvider>
  );
};
export default index;
