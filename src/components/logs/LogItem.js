import React from "react";
import DayJS from "react-dayjs";

const LogItem = (props) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            props.log.attention ? "red-text" : "blue-text"
          }`}
        >
          {props.log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{props.log.id}</span> assigned to{" "}
          <span className="black-text">{props.log.tech}</span> on{" "}
          <DayJS format="ddd, MMM D, YYYY, h:mm A">{props.log.date}</DayJS>
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default LogItem;
