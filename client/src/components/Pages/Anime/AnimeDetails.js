import styled from "styled-components";

const AnimeDetails = ({ anime }) => {
  console.log(anime);
  return (
    <AnimeDetailsWrapper>
      <Top>
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
      </Top>

      <Description>
        <Left>
          <Text>score</Text>
          <Score>{anime.score}</Score>
          <span>{anime.scored_by} users</span>
        </Left>
        <Center>
          <TopCenter>
            <div>
              <span>Ranked: </span>
              <p>#{anime.rank}</p>
            </div>
            <div>
              <span>Popularity: </span>
              <p>#{anime.popularity}</p>
            </div>
            <div>
              <span>Members</span>
              <p> {anime.members}</p>
            </div>
          </TopCenter>
        </Center>
      </Description>
    </AnimeDetailsWrapper>
  );
};

const AnimeDetailsWrapper = styled.div`
  h2 {
    font-size: 24px;
    color: var(--gray);
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  iframe {
    margin: 30px auto;
  }
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  background-color: var(--blue);
  text-transform: uppercase;
  padding: 6px;
  border-radius: 2px;
`;
const Score = styled.p`
  background-color: initial;
  font-size: 36px;
`;
const Center = styled.div`
  display: flex;
`;

const TopCenter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

export default AnimeDetails;
