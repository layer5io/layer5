import React, { useState, useRef } from "react";
import CopySvg from "../../../../../assets/images/sistent/copy-button";

export const CodeBlock = ({ name, code }) => {

  const [showCode, setShowCode] = useState(false);

  const codeRef = useRef(null); // Ref for code element

  const onChange = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {
    const codeText = codeRef.current.innerText;

    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    navigator.clipboard.writeText(codeText)
      .then(() => {

      });
  };

  return (
    <div className="show-code" >
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <label htmlFor={name} className="label">
        Show Code
      </label>
      {showCode && (
        <div className="code-container" style ={{ position: "relative" }} >
          <pre className="code">
            <code ref={codeRef} lang="javascript">{code}</code>
          </pre>
          <div style={{ display: "flex", alignItems: "center", position: "absolute",  top: "0rem",  right: "1rem", border: "none" }}>
            <div style={{ width: "fit-content", height: "fit-content", cursor: "pointer" }}  onClick={handleCopy}>
              {/* <button onClick={handleCopy} style={{ width: "fit-content", height: "fit-content", border: "none", backgroundColor: "transperant"  }} > */}
              <CopySvg />
              {/* </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
