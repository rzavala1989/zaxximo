import React, { Fragment } from "react";

const AddButton = () => {
  return (
    <Fragment>
      <div className="fixed-action-btn">
        <a
          href="#add-modal"
          className="btn-floating pulse btn-large red darken-4 modal-trigger"
        >
          <i className="large material-icons">add</i>
        </a>
        <ul>
          <li>
            <a
              href="#staff-list-modal"
              className="btn-floating green modal-trigger"
            >
              <i className="material-icons">person</i>
            </a>
          </li>
          <li>
            <a
              href="#add-staff-modal"
              className="btn-floating red modal-trigger"
            >
              <i className="material-icons">person_add</i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default AddButton;
