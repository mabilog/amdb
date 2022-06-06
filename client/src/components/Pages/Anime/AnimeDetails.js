import styled from "styled-components";

const AnimeDetails = ({ anime }) => {
  console.log(anime);
  return (
    <AnimeDetailsWrapper>
      <h1>{anime.title}</h1>
      <h2>{anime.title_english}</h2>
      <Description>
        <Left>
          <Text>score</Text>
          <Score>{anime.score}</Score>
          <span>{anime.scored_by} users</span>
        </Left>
        <Center>
          <TopCenter>
            <div>
              <p>Ranked: #{anime.rank}</p>
            </div>
            <div>
              <p>Popularity: #{anime.popularity}</p>
            </div>
            <div>
              <p>Members: #{anime.members}</p>
            </div>
          </TopCenter>
          <BottomCenter></BottomCenter>
        </Center>
        <Right></Right>
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

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100px; */
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
  width: 100%;
  height: 100%;
`;

const TopCenter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const BottomCenter = styled.div``;
const Right = styled.div``;
export default AnimeDetails;
