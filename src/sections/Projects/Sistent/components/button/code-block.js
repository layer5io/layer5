import React, { useState } from "react";
import CopySvg from "../../../../../assets/images/sistent/copy-button";
import { ReactComponent as Tick } from "../../../../../assets/images/sistent/tick.svg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export const CodeBlock = ({ name, code }) => {

  const [showCode, setShowCode] = useState(false);
  const [isCopied , setIsCopied] = useState(false);

  const onChange = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {

    if (!navigator.clipboard) {
      console.error("Clipboard API not supported");
      return;
    }

    navigator.clipboard.writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        },1600);
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
            <code lang="javascript">{code}</code>
          </pre>
          <div style={{ display: "flex", alignItems: "center", position: "absolute",  top: "0rem",  right: "1rem", border: "none" }}>
            <div style={{ width: "fit-content", height: "fit-content", cursor: "pointer" }}  onClick={handleCopy}>
              {/* <button onClick={handleCopy} style={{ width: "fit-content", height: "fit-content", border: "none", backgroundColor: "transperant"  }} > */}
              {/* { isCopied ? ( <CopySvg /> ) : ( <Tick /> ) } */}
              {!isCopied ? (<CopySvg />) : (<> <Tick height="1.2rem" width = "1.2rem"/> </>)}
              {/* </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
