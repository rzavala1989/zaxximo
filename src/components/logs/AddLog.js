import React, { useState } from "react";

const AddLog = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [staff, setStaff] = useState("");

  const onSubmit = () => {
    console.log(message, staff, attention);
    setMessage("");
    setStaff("");
    setAttention(false);
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

export default AddLog;
