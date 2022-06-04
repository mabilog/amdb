import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <SearchWrapper>
      <Input />
      <SearchButton>
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
