import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../../GlobalContext";
const SearchResult = () => {
  const { searchResult } = useContext(GlobalContext);
  console.log(searchResult);
  return <div>SearchResult</div>;
};

export default SearchResult;
