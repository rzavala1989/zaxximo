import React from "react";

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
      </div>
    </li>
  );
};

export default LogItem;
