import React, { useState, useRef } from "react";
import { ReactComponent as Logo } from "../../../../../assets/images/sistent/copy-button.svg";
import { ReactComponent as Tick } from "../../../../../assets/images/sistent/tick.svg";

export const CodeBlock = ({ name, code }) => {
  const [showCode, setShowCode] = useState(false);

  const codeRef = useRef(null); // Ref for code element

  const [swap , setSwap]  = useState(true); // by default it is true as it need to show the copy button

  const onChange = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {
    const codeText = codeRef.current.innerText;
    console.log(codeText);

    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    navigator.clipboard.writeText(codeText)
      .then(() => {
        setSwap((prev) => !prev);
        setTimeout(() => {
          setSwap((prev) => !prev);
        }, 2000); // Reset to copy button after 2 seconds
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
          <button onClick={handleCopy} style={{ backgroundColor: "transparent",  position: "absolute",  top: "0rem",  right: "1rem", border: "none" }} >
            {
              swap && <Logo  style={{ cursor: "pointer" }} height="1.2rem" width = "1.2rem" />
            } 
            {
              !swap && <Tick height="1.2rem" width = "1.2rem" />
            }
          </button>
        </div>
      )}
    </div>
  );
};
