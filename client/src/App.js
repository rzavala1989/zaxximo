import React, { Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Logs from "./components/logs/Logs";
import AddButton from "./components/layout/AddButton";
import AddLog from "./components/logs/AddLog";
import EditLog from "./components/logs/EditLog";
import AddStaff from "./components/staff/AddStaff";
import StaffListModal from "./components/staff/StaffListModal";
import { Provider } from "react-redux";
import store from "./store";
import SiteImage from "./components/layout/SiteImage";

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
        <Navbar />
        <div className="container">
          <main className="primary">
            <AddButton />
            <AddLog />
            <EditLog />
            <AddStaff />
            <StaffListModal />
            <Logs />
          </main>
          <section className="secondary">
            <SiteImage />
          </section>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
