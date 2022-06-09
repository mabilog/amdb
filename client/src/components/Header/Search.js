import { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext";

const Search = () => {
  const { setSearch } = useContext(GlobalContext);
  const [searchBar, setSearchBar] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchBar);
    navigate(`/search`);
  };

  return (
    <SearchWrapper onSubmit={(e) => handleSubmit(e)}>
      <Input onChange={(e) => setSearchBar(e.target.value)} />
      <SearchButton type="submit">
        <FaSearch />
      </SearchButton>
    </SearchWrapper>
  );
};
const SearchWrapper = styled.form`
  display: flex;
  justify-content: center;
  background-color: var(--gray-dark);
  border-radius: 20px;
  height: 75%;
`;
const Input = styled.input`
  width: 75%;
  font-size: 16px;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  color: var(--white);
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  color: var(--white);
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  font-size: 16px;
  width: 40px;
  transition: 200ms ease;
  &:hover {
    color: var(--purple);
  }
`;
export default Search;
