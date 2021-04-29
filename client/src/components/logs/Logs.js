import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";

import { connect } from "react-redux";

//grab from bottom of file mapstatetoprops
const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <main>
      <ul className="collection with-header z-depth-4">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        <li className="collection-item">
          <span id="t-head">Logs</span>
          <span id="t-head-icon">Delete Log</span>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log) => (
            <li>
              <LogItem log={log} key={log._id} />
            </li>
          ))
        )}
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
  current: null,
  loading: false,
  error: null,
});

export default connect(mapStateToProps, { getLogs })(Logs);
