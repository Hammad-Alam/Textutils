import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const convertUpperCase = () => {
    setText(text.toUpperCase());
    props.handleAlert("Converted to Uppercase", "success");
  };

  const convertLowerCase = () => {
    setText(text.toLowerCase());
    props.handleAlert("Converted to Lowercase", "success");
  };

  const convertCapitalizeCase = () => {
    let words = text.split(" ");
    let capitalizeWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    let Capitalized = capitalizeWords.join(" ");
    setText(Capitalized);
    props.handleAlert("Converted to Capitalize Case", "success");
  };

  const clearText = () => {
    setText("");
    props.handleAlert("Text cleared", "success");
  };

  const removeExtraSpaces = () => {
    let updateText = text.split(/[ ]+/); // Using regex to identify extra spaces
    setText(updateText.join(" "));
    props.handleAlert("Extra spaces removed", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.handleAlert("Copied to clipboard", "success");
  };

  return (
    <div
      className="container form-floating"
      style={{
        fontFamily: "Sans-serif",
        color: props.mode === "dark" ? "white" : "#2e4053",
      }}
    >
      <h2 className="my-3">{props.heading}</h2>
      <textarea
        id="myBox"
        placeholder="Enter the text here.."
        value={text}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "10px",
          backgroundColor: props.mode === "dark" ? "#13466e" : "white",
          color: props.mode === "dark" ? "white" : "#2e4053",
        }}
        onChange={handleOnChange}
      ></textarea>
      <div
        className="d-flex my-2 row row-cols-auto"
        style={{
          gap: "10px",
          marginLeft: "1px",
          color: props.mode === "dark" ? "white" : "#2e4053",
        }}
      >
        <button
          onClick={convertUpperCase}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          Uppercase
        </button>
        <button
          onClick={convertLowerCase}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          LowerCase
        </button>
        <button
          onClick={convertCapitalizeCase}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          Capitalized
        </button>
        <button
          onClick={removeExtraSpaces}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          onClick={handleCopy}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          Copy
        </button>
        <button
          onClick={clearText}
          type="button"
          className="btn btn-info cols"
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#31D2F2",
            color: props.mode === "dark" ? "white" : "black",
          }}
          disabled={text.length === 0}
        >
          Clear
        </button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>
          Word Count{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          | Character Count {text.length} | Sentence Count{" "}
          {text.length === 0 ? text.split("").length : text.split(".").length} |
          Line Count{" "}
          {text.length === 0 ? text.split("").length : text.split("/n").length}
        </p>
        <p>
          {0.0008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}

export default TextForm;
