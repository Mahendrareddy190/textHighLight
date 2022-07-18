import React from "react";
import hardcodetext from "./recordhardcode.json";
const Records = () => {
  return (
    <div className="container border m-0 p-0">
      <div className="row">
        <header>
          <nav
            className="navbar text-light navbar-light"
            style={{ backgroundColor: "#66669a" }}
          >
            <div className="container-fluid">
              <h3 style={{ margin: "0 0 0 80px" }}>Records</h3>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
        <div>
          <ul className="mr-0 ml-0 p-0">
            {hardcodetext.map((text, index) => (
              <div
                key={index}
                className="m-2"
                style={{
                  backgroundColor: "white",
                  boxShadow: "3px 3px 1px #aaa7cc",
                  listStyle: "none",
                  padding: "8px",
                }}
              >
                <li>
                  {text.id}.{text.text}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Records;
