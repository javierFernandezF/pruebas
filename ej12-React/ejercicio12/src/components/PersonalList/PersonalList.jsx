import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./PersonalList.css";
import ReactAudioPlayer from "react-audio-player";
const PersonalList = ({ personalList }) => {
  return (
    <div className="personal-list">
      <h1 className="personal-title">My Music List!</h1>
      <Droppable droppableId="personalList">
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
          >
            {personalList != ""
              ? personalList.map((song, index) => {
                  return (
                    <Draggable key={song.id} draggableId={index} index={index}>
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
    </div>
  );
};

export default PersonalList;
