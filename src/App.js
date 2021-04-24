import React, { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <main>
      <SearchBar />
      <div className="container">
        <Logs />
      </div>
    </main>
  );
}

export default App;
