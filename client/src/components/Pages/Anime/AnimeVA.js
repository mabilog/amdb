import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { AnimeContext } from "./AnimeContext";
import Loading from "./Loading";

const AnimeVA = () => {
  const { anime, voiceActors, setVoiceActors } = useContext(AnimeContext);
  const [loading, setLoading] = useState(false);
  const { mal_id } = useParams();

  useEffect(() => {
    // fetching VA info
    setLoading(true);
    fetch(`/animeApi/getAnime/${mal_id}/characters`)
      .then((res) => res.json())
      .then((data) => setVoiceActors(data.queryData.data.slice(0, 6)))
      .then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anime]);

  if (loading) return <Loading />;
  return (
    <AnimeVAWrapper>
      <ul>
        {voiceActors?.map((actor) => {
          return (
            <li key={actor.character.name}>
              <div>
                <img
                  src={actor.character.images.jpg.image_url}
                  alt={actor.character.name}
                />
                <CharWrapper>
                  <h6>{actor.character.name}</h6>
                  <span>{actor.role}</span>
                </CharWrapper>
              </div>
              <div>
                <VAWrapper>
                  <a
                    href={actor.voice_actors[0].person.url}
                    key={actor.voice_actors[0].person.name}
                  >
                    {actor.voice_actors[0].person.name}
                  </a>
                </VAWrapper>
                <img
                  src={actor.voice_actors[0].person.images.jpg.image_url}
                  alt={actor.voice_actors[0].person.name}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </AnimeVAWrapper>
  );
};

const AnimeVAWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  ul {
    display: flex;
    flex-flow: column wrap;
    align-content: flex-start;
    width: 50%;
    li {
      display: flex;
      flex-direction: row;
      height: calc(100% / 3);
      width: 100%;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
        img {
          max-height: 100px;
        }
      }
    }
  }
`;

const VAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: var(--white);
  }
`;

const CharWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: left; */
`;

export default AnimeVA;
