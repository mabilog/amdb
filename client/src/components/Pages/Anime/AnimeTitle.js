import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";
const AnimeTitle = () => {
  const { anime } = useContext(AnimeContext);

  return (
    <AnimeTitleWrapper>
      <h1>{anime.title}</h1>
      <h2>{anime.title_english}</h2>
      <iframe
        src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
        width="560"
        height="315"
        title={anime.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </AnimeTitleWrapper>
  );
};
const AnimeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  iframe {
    margin: 30px auto;
  }
`;
export default AnimeTitle;
