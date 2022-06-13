import { Link } from "react-router-dom";
import styled from "styled-components";

const Categories = () => {
  const weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const day = weekday[new Date().getDay()];

  return (
    <CategoriesWrapper>
      <Category to="/seasonal">
        <p>Spring 2022 Season Anime</p>
      </Category>
      <Category to="/schedule">
        <p>{day}'s anime schedule</p>
      </Category>
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled.div`
  display: flex;
  gap: 60px;

  p:first-letter {
    text-transform: uppercase;
  }
`;

const Category = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: var(--gray);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 400px;
  height: 200px;
  transition: 200ms ease;
  font-weight: 600;
  font-size: 24px;
  &:hover {
    transform: scale(1.1);
    background-color: var(--purple);
  }
`;
export default Categories;
