import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const AnimeVA = ({ anime }) => {
  const [voiceActors, setVoiceActors] = useState();
  const [japVa, setJapVa] = useState();
  useEffect(() => {
    fetch(`/animeApi/getAnime/${anime.mal_id}/characters`)
      .then((res) => res.json())
      .then((data) => setVoiceActors(data.queryData.data.slice(0, 6)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (voiceActors) {
      const japaneseVa = voiceActors.map((actor) => {
        return actor.voice_actors.find((va) => va.language === "Japanese");
        // return actor.voiceActors.filter(
        //   (voice_actors) => voice_actors.language === "Japanese"
        // );
      });
      setJapVa(japaneseVa);
    }
  }, [voiceActors]);

  console.log(japVa);
  return (
    <AnimeVAWrapper>
      <ul>
        {voiceActors?.map((actor) => (
          <li key={actor.character.name}>
            <div>
              <img
                src={actor.character.images.jpg.image_url}
                alt={actor.character.name}
              />
              <span>{actor.role}</span>
            </div>
            {japVa?.map((va) => {
              console.log(va);
              return (
                // <div>
                //   <NameWrapper>
                //     <Link to={`/person/${va.person.mal_id}`}>
                //       {va.person.name}
                //     </Link>
                //     <span>{va.language}</span>
                //   </NameWrapper>
                //   <img
                //     src={va.person.images.jpg.image_url}
                //     alt={va.person.name}
                //   />
                // </div>
                <></>
              );
            })}
          </li>
        ))}
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

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default AnimeVA;
