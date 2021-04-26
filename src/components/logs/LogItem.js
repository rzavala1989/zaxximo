import React from "react";
import DayJS from "react-dayjs";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log deleted from tasks" });
  };
  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> assigned to{" "}
          <span className="black-text">{log.staff}</span> on{" "}
          <DayJS format="ddd, MMM D, YYYY, h:mm A">{log.date}</DayJS>
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
