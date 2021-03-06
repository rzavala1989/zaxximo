import React from "react";
import DayJS from "react-dayjs";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const { attention, id, _id, message, staff, date } = log;

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems);
  });

  const onDelete = () => {
    deleteLog(_id);
    M.toast({ html: "Log deleted from tasks" });
  };

  const onEdit = () => {
    setCurrent(log);
  };

  return (
    <li className="collection-item highlight">
      <div>
        <a
          onClick={onEdit}
          href="#edit-modal"
          data-position="left"
          data-tooltip="Edit or reassign task"
          className={`modal-trigger tooltipped ${
            attention ? "grey lighten-1 completed" : "red-text"
          }`}
        >
          {message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> assigned to{" "}
          <span className="black-text">{staff}</span> on{" "}
          <DayJS format="ddd, MMM D, YYYY, h:mm A">{date}</DayJS>
          {attention ? (
            <span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span id="completed-text" className="red darken-4>">
                &nbsp;Completed!&nbsp;
              </span>
            </span>
          ) : (
            ""
          )}
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
