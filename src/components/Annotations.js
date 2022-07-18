import React, { useEffect, useState } from "react";

const Annotations = () => {
  const [state, setstate] = useState(true);

  var Annotation = JSON.parse(localStorage.getItem("Annotations"));
  var hightligh = JSON.parse(localStorage.getItem("hightlight"));

  const delet = (highlig) => {
    localStorage.setItem("hightlight", JSON.stringify(hightligh));
    delete Annotation[0][`${highlig}`];
    localStorage.setItem("Annotations", JSON.stringify([Annotation]));
  };
  let Annotat = {};
  if (state === true) {
    localStorage.setItem("Annotations", JSON.stringify([Annotat]));
    setstate(false);
  }
  let newarr2 = JSON.parse(localStorage.getItem("True_Fasle"));
  const maped = () => {
    for (let i = 0; i < hightligh.length; i++) {
      if (newarr2[i] === true) {
        Annotat[hightligh[i]] = "person";
      } else {
        Annotat[hightligh[i]] = "org";
      }
    }
    localStorage.setItem("Annotations", JSON.stringify([Annotat]));
  };
  useEffect(() => {
    maped();
  });

  const delet_model = (highl) => (
    <div>
      <span
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        aria-hidden="true"
        style={{
          color: "blue",
          cursor: "pointer",
          fontSize: "25px",
          padding: "0 0 0 50px",
          margin: "0",
        }}
      >
        &times;
      </span>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modal-dialog modal-dialog-centered">
            <div className="modal-body">
              <h3>Are you sure you want to delete ?</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => delet(highl)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container border m-0 p-0">
      <div className="row">
        <header>
          <nav
            className="navbar text-light navbar-light"
            style={{ backgroundColor: "#66669a" }}
          >
            <div className="container-fluid">
              <h3 style={{ margin: "0 0 0 50px" }}>Annotations</h3>
              <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
        <div className="container-fluid">
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {hightligh.map((hi, index) => (
              <li key={index}>
                {/* {Annotation.map((ann, index) => ( */}
                <div
                  className="d-flex m-0 p-0 container-fluid"
                  key={index}
                  style={{
                    listStyle: "none",
                  }}
                >
                  <div className="row m-3">
                    <div className="col-4">{hi}</div>
                    <div className="col-4">
                      <b className="d-flex">{Annotation[0][hi]}</b>
                    </div>
                    <div className="col-4 p-0">{delet_model(hi)}</div>
                  </div>
                </div>
                {/* ))} */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Annotations;
