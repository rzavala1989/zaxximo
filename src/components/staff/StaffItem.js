import React from "react";
import PropTypes from "prop-types";

const StaffItem = ({ staff }) => {
  return (
    <li className="collection-item">
      <div>
        {staff.firstName} {staff.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

StaffItem.propTypes = {
  staff: PropTypes.object.isRequired,
};

export default StaffItem;
