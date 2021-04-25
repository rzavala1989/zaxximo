import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLog from "./components/logs/AddLog";
import EditLog from "./components/logs/EditLog";
import AddStaff from "./components/staff/AddStaff";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <main>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLog />
          <EditLog />
          <AddStaff />
          <Logs />
        </div>
      </main>
    </Fragment>
  );
};

export default App;
