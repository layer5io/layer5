import React, { useState } from "react";
import CopySvg from "../../../../../assets/images/sistent/copy-button";
import styled from "styled-components";

const CopyButtonContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0rem;
    right: 1rem;
    border: none;
    cursor: pointer;
  `;

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
          <CopyButtonContainer onClick={handleCopy} >
            {!isCopied ? (<CopySvg />) : "Copied!" }
          </CopyButtonContainer>
        </div>
      )}
    </div>
  );
};
