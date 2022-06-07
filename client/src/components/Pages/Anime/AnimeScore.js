import { useContext } from "react";
import { AnimeContext } from "./AnimeContext";
import styled from "styled-components";

const AnimeScore = () => {
  const { anime } = useContext(AnimeContext);
  return (
    <AnimeScoreWrapper>
      <ScoreWrapper>
        <Text>score</Text>
        <Score>{anime.score}</Score>
        <span>{anime.scored_by} users</span>
      </ScoreWrapper>
      <Center>
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
      </Center>
    </AnimeScoreWrapper>
  );
};

const AnimeScoreWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ScoreWrapper = styled.div`
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
export default AnimeScore;
