import "./SearchList.css";
import ReactAudioPlayer from "react-audio-player";

const SearchList = ({
  offset,
  setOffset,
  content,
  setContent,
  contentOk,
  search,
}) => {
  const previousPage = async () => {
    setOffset(offset - 5);
    let getInfo = await fetch(
      "https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&offset=" +
        offset +
        "&per_type_limit=5&query=" +
        search
    )
      .then((response) => response.json())
      .then((data) => setContent(data.search.data.tracks));
  };
  const nextPage = async () => {
    setOffset(offset + 5);
    let getInfo = await fetch(
      "https://api.napster.com/v2.2/search?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&offset=" +
        offset +
        "&per_type_limit=5&query=" +
        search
    )
      .then((response) => response.json())
      .then((data) => setContent(data.search.data.tracks));
  };
  return (
    <div className="search-list">
      {offset === 5 ? (
        <button>Previous page</button>
      ) : (
        <button onClick={previousPage}>Previous page</button>
      )}
      <ul>
        {content != ""
          ? content.map((song) => {
              return (
                <li key={song.id} className="song">
                  <h1>Artist: {song.artistName}</h1>
                  <p>Disc: {song.albumName}</p>
                  <p>Song's name: {song.name}</p>
                  <ReactAudioPlayer src={song.previewURL} controls />
                </li>
              );
            })
          : null}
      </ul>
      <div>Pag {offset / 5}</div>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
};

export default SearchList;
