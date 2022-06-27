import React, { useState } from "react";
import { sha1, sha256, sha384, sha512 } from "crypto-hash";
import "./hashing.css";

function Hashing() {
  const [algorithms] = useState(["sha1", "sha256", "sha384", "sha512"]);
  let [textInput, setTextInput] = useState("");
  let [fileInput, setFileInput] = useState("");
  let [algorithm, setAlgorithm] = useState("sha1");
  let [output, setOutput] = useState("");

  // For handling text input
  const handleTextInput = async (e) => {
    // Get the Value
    let value = e.target.value;

    // Store the Value
    let result = "";

    // Get the Current Active Algorithm selected
    if (algorithm === "sha1") {
      result = await sha1(value);
    } else if (algorithm === "sha256") {
      result = await sha256(value);
    } else if (algorithm === "sha384") {
      result = await sha384(value);
    } else if (algorithm === "sha512") {
      result = await sha512(value);
    }

    // Set the hashed text as output
    setOutput(result);

    // Set the value of the text input
    setTextInput(value);
  };

  // For handling file input
  const handleFileInput = (e) => {
    const fr = new FileReader();

    // Listening to when the file has been read.
    fr.onload = async () => {
      let result = "";

      // Hashing the content based on save algorithm
      if (algorithm === "sha1") {
        result = await sha1(fr.result);
      } else if (algorithm === "sha256") {
        result = await sha256(fr.result);
      } else if (algorithm === "sha384") {
        result = await sha384(fr.result);
      } else if (algorithm === "sha512") {
        result = await sha512(fr.result);
      }
    };
  };

  // For handling algorithm change
  const handleAlgorithmChange = async (e) => {};

  return (
    <>
      <div className="hashing-container">
        <div className="hashing-content">
          {/* Form Starts */}
          <div className="hashing-form">
            <h4 className="hashing-form-heading">Input</h4>
            <form>
              <div className="form-group">
                <label htmlFor="text-input">Text</label>
                <input
                  type="text"
                  className="form-control"
                  id="text-input"
                  placeholder="Write Some Text ..."
                  value={textInput}
                  onChange={handleTextInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input">File Input</label>
                <input
                  type="file"
                  className="form-control"
                  id="file-input"
                  onChange={handleFileInput}
                />
              </div>
            </form>
          </div>
          {/* Form Ends */}

          {/* Start: Hashing algorithms */}
          <div className="hashing-algorithms">
            <h4 className="hashing-algorithms-heading">Algorithms</h4>
            <div className="hashing-algorithms-list">
              {algorithms.map((algo) => {
                return (
                  <div className="form-check" key={algo}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="algorithm"
                      id={algo}
                      value={algo}
                      checked={algorithm === algo}
                      onChange={handleAlgorithmChange}
                    />
                    <label className="form-check-label" htmlFor={algo}>
                      {algo}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          {/* End: Hashing algorithms */}

          {/*  Start: Hashed output */}
          <div className="hashed-output">
            <h4 className="hashed-algorithm-heading">Output</h4>
            <div className="hashed-algorithm-container">
              <p className="hashed-algorithm-text">{output}</p>
            </div>
          </div>
          {/* End: Hashed output */}
        </div>
      </div>
    </>
  );
}

export default Hashing;
