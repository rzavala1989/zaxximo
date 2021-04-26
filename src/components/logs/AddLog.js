import React, { useState } from "react";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLog = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [staff, setStaff] = useState("");

  const onSubmit = () => {
    if (message === "" || staff === "") {
      M.toast({ html: "Please enter a message and staff member" });
    } else {
      //set props for new log
      const newLog = {
        message,
        attention,
        staff,
        date: new Date(),
      };
      //commit action for new log
      addLog(newLog);

      M.toast({ html: `Task assigned for ${staff}` });

      setMessage("");
      setStaff("");
      setAttention(false);
    }
  };
  return (
    <div id="add-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="staff"
              value={staff}
              className="browser-default"
              onChange={(e) => setStaff(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="Dan Rather">Dan Rather</option>
              <option value="Jan Rather">Jan Rather</option>
              <option value="Pam Rather">Pam Rather</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "65%",
  height: "65%",
};

export default connect(null, { addLog })(AddLog);
