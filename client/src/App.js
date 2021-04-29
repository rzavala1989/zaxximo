import React, { Fragment, useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLog from "./components/logs/AddLog";
import EditLog from "./components/logs/EditLog";
import AddStaff from "./components/staff/AddStaff";
import StaffListModal from "./components/staff/StaffListModal";
import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./App.css";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddButton />
          <AddLog />
          <EditLog />
          <AddStaff />
          <StaffListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
