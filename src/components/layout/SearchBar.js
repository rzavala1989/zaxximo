import React from "react";

function SearchBar() {
  return (
    <div>
      <nav style={{ marginBottom: "30px" }} className="indigo">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" placeholder="Search Logs.." />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
