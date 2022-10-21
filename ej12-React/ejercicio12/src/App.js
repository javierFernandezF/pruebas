import "./App.css";
import { useState, useEffect } from "react";
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

  const [offset, setOffset] = useState(5);

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
      <PersonalList />
      <SearchList
        content={content}
        setContent={setContent}
        offset={offset}
        setOffset={setOffset}
        contentOk={contentOk}
        search={search}
      />
    </div>
  );
}

export default App;
