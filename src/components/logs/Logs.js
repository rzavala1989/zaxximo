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
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => (
          <li>
            <LogItem log={log} key={log.id} />
          </li>
        ))
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
  current: null,
  loading: false,
  error: null,
});

export default connect(mapStateToProps, { getLogs })(Logs);
