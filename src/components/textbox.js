import React, { useState } from "react";
export default function Textbox(props,darkMode) {
  const [text, setText] = useState("");
  const [res, setRes] = useState("");
  let switchStyle = props.darkMode ? { color: 'white' } : { color: 'black' };
  const onChange = (event) => {
    console.log("Content changed");
    setText(event.target.value);
  };

  const onClick_Uppercase = () => {
    console.log("Button Clicked");
    setRes(text.toUpperCase());
  };

  const onClick_clear = () => {
    setText("");
    setRes("");
  };

  const onClick_Lowercase = () => {
    console.log("Button Clicked");
    setRes(text.toLowerCase());
  };
  return (
    <>
      <div className={`container mt-3 ${props.darkMode ? "dark-mode" : ""}`}>
        <form>
          <div className="form-group">
            <h5 style={switchStyle}>{props.heading}</h5>
            <textarea
              className="form-control"
              value={text}
              rows="15"
              onChange={onChange}
              style={props.darkMode ? { backgroundColor: "#333", color: "#fff" } : {}}
            ></textarea>
            <div className={`container my-2 ${props.darkMode ? "text-light" : ""}`}>
              <h4>Text Summary</h4>
              <p>
                {text.split(" ").length} Words and {text.length} characters
              </p>
            </div>
            <div className="container text-center my-5">
              <button
                type="button"
                className="btn btn-outline-secondary mx-2"
                onClick={onClick_Uppercase}
              >
                {props.submit_button1}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary mx-2"
                onClick={onClick_Lowercase}
              >
                {props.submit_button2}
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary mx-2"
                onClick={onClick_clear}
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={`container ${props.darkMode ? "dark-mode" : ""}`}>
        <h5 style={switchStyle}>Result</h5>
        <textarea
          className="form-control"
          value={res}
          rows="3"
          style={props.darkMode ? { backgroundColor: "#333", color: "#fff" } : {}}
        ></textarea>
      </div>
    </>
  );
}
