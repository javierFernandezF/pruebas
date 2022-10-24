import "./SearchList.css";
import ReactAudioPlayer from "react-audio-player";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

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
        <button className="button-list previous-page">Previous page</button>
      ) : (
        <button className="button-list previous-page" onClick={previousPage}>
          Previous page
        </button>
      )}
      <Droppable droppableId="searchList">
        {(droppableProvided) => (
          <ul
            className="ul-search"
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {content != ""
              ? content.map((song, index) => {
                  return (
                    <Draggable
                      key={song.id}
                      draggableId={song.id}
                      index={index}
                    >
                      {(draggableProvided) => (
                        <li
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.dragHandleProps}
                          className="song"
                        >
                          <h1>Artist: {song.artistName}</h1>
                          <p>Disc: {song.albumName}</p>
                          <p>Song's name: {song.name}</p>
                          <ReactAudioPlayer src={song.previewURL} controls />
                        </li>
                      )}
                    </Draggable>
                  );
                })
              : null}
            {droppableProvided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="search-page">Pag {offset / 5}</div>
      <button className="button-list next-page" onClick={nextPage}>
        Next page
      </button>
    </div>
  );
};

export default SearchList;
