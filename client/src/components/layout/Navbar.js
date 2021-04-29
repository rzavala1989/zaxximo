import React from "react";

function SearchBar() {
  return (
    <div>
      <nav
        style={{
          marginBottom: "30px",
          borderBottom: "8px solid #ad020a",
        }}
        className="red lighten-1"
      >
        <div className="nav-wrapper">
          <a href="#" className="brand-logo" id="zaxximo-logo">
            Zaxximo
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
