import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import "./Text_records.css";

const Text_records = () => {
  const [person, setperson] = useState(false);
  const [org, setorg] = useState(false);
  const [state, setstate] = useState(true);

  const changeState = () => {
    setperson(true);
    setorg(false);
  };

  const changeStat = () => {
    setorg(true);
    setperson(false);
  };

  // text to local storage
  let tex =
    "Elinor Lee a gangster's moll living in the Harlem section of New York City, has signed up-and-coming boxer Benny Blue to a 10-year contract. Lee and a pair of corrupt fight promoter scheme to build up Blue as a potential champion, with the goal of betting against him when they force him to take a dive in a champion fight. Lee conspires to hire Fredi  an old friend of Blue and an escaped convict hiding from the law, to be his sweetheart and to control him for Lee  and her partners. The plans are derailed when Blue loses a key fight to a German boxer, but he works to regain his standing in the sport and is able to meet the German in a rematch after two years have Elinor Lee a gangster's moll living in the Harlem section of New York City, has signed up-and-coming boxer Benny Blue to a 10-year contract. Lee and a pair of corrupt fight promoter scheme to build up Blue as a potential champion, with the goal of betting against him when they force him to take a dive in a champion fight. Lee conspires to hire Fredi  an old friend of Blue and an escaped convict hiding from the law, to be his sweetheart and to control him for Lee  and her partners. The plans are derailed when Blue loses a key fight to a German boxer, but he works to regain his standing in the sport and is able to meet the German in a rematch after two years have";
  localStorage.setItem("text", tex);
  let text_from_local = localStorage.getItem("text");

  // Annotations to localStorage
  let arr = [];
  let arr1 = [];
  let newarr2 = JSON.parse(localStorage.getItem("True_Fasle"));
  let hightligh = JSON.parse(localStorage.getItem("hightlight"));
  if (state === true) {
    localStorage.setItem("hightlight", JSON.stringify(arr));
    localStorage.setItem("True_Fasle", JSON.stringify(arr1));
    let newarr = [...hightligh, ...arr];
    let newar = [...newarr2, ...arr1];
    localStorage.setItem("hightlight", JSON.stringify(newarr));
    localStorage.setItem("True_Fasle", JSON.stringify(newar));
    setstate(false);
  }
  const selectableMouseup = () => {
    var selected = window.getSelection().toString().trim();
    // alert(selected);
    if (selected && person === true) {
      arr.push(selected);
      arr1.push(true);
    }
    if (selected && org === true) {
      arr.push(selected);
      arr1.push(false);
    }
    let newarr = [...hightligh, ...arr];
    let newar = [...newarr2, ...arr1];
    localStorage.setItem("hightlight", JSON.stringify(newarr));
    localStorage.setItem("True_Fasle", JSON.stringify(newar));
  };

  const selectabletextarea = document.querySelectorAll(".selectable_Text_Area");
  selectabletextarea.forEach((elem) => {
    elem.addEventListener("mouseup", selectableMouseup);
  });

  return (
    <div className="container-fluid border m-0 p-0 text-light">
      <div className="row">
        <header>
          <div
            style={{
              backgroundColor: "#66669a",
              width: "100%",
              height: "53px",
            }}
          >
            <div className="d-flex">
              <button
                className="btn border-light text-light person_btn"
                style={{ margin: "8px 0 0 20px" }}
                onClick={changeState}
              >
                Person
              </button>
              <button
                className="btn border-light text-light"
                style={{ margin: "8px 0 0 20px" }}
                onClick={changeStat}
              >
                org
              </button>
            </div>
          </div>
        </header>
        <div
          className="container text-dark p-4 selectable_Text_Area"
          style={{ wordSpacing: "10px" }}
        >
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={hightligh}
            autoEscape={true}
            textToHighlight={text_from_local}
          />
        </div>
      </div>
    </div>
  );
};

export default Text_records;
