import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
import styled from "styled-components";

const SearchResult = () => {
  const { searchResult } = useContext(GlobalContext);
  console.log(searchResult);
  return <div>SearchResult</div>;
};
const SearchResultWrapper = styled.div``;
export default SearchResult;
