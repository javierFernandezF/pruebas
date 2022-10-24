import "./App.css";
import { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchList from "./components/SearchList/SearchList";
import PersonalList from "./components/PersonalList/PersonalList";

function App() {
  //Info about what do you want search
  const [search, setSearch] = useState("");
  //Info do you recibe for api
  const [content, setContent] = useState("");

  //This state activate the map on SearchList

  const [contentOk, setContentOK] = useState(false);

  //This state is for move the page in searching
  const [offset, setOffset] = useState(5);

  //This is the personal list

  const [personalList, setPersonalList] = useState([]);

  return (
    <div className="App">
      <SearchInput
        content={content}
        setContent={setContent}
        offset={offset}
        setOffset={setOffset}
        setContentOK={setContentOK}
        search={search}
        setSearch={setSearch}
      />
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (destination.droppableId === "personalList") {
            let insertSong = content.find(
              (element) => element.id === result.draggableId
            );
            console.log(content[0].id);
            console.log(result.draggableId);
            console.log(insertSong);

            setPersonalList([...personalList, insertSong]);
          }
        }}
      >
        <PersonalList personalList={personalList} />
        <SearchList
          content={content}
          setContent={setContent}
          offset={offset}
          setOffset={setOffset}
          contentOk={contentOk}
          search={search}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
