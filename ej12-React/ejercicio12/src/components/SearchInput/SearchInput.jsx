import { useEffect, useState } from "react";
import "./SearchInput.css";

const SearchInput = ({
  content,
  setContent,
  setContentOK,
  offset,
  setOffset,
  search,
  setSearch,
}) => {
  //Here is the get to rest API
  let getMusic = () => {
    setOffset(5);
    fetch(
      "https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&offset=" +
        offset +
        "&per_type_limit=5&query=" +
        search
    )
      .then((response) => response.json())
      .then((data) => {
        setContent(data.search.data.tracks);
        console.log(data.search.data.tracks);
      });
    // .then(setContentOK(true));
  };

  return (
    <div className="search-input">
      <h1 className="search-title">Search your favorite music!</h1>

      <input
        className="input-search"
        onDragStart={getMusic}
        placeholder="Input your favorite song!"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button className="search-button" onClick={getMusic}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
