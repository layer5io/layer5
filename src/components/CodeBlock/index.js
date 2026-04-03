import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";
import { copyToClipboard } from "./copy-to-clipboard";

export const Pre = styled.pre`
  position: relative;
  text-align: left;
  width: 100%;
  margin: auto;
  margin-top: 1em;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: "Courier New", Courier, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  opacity: 0.5;
  right: 0;
  z-index: 1;
  border: 0;
  border-radius: 3px;
  margin-right: 1.5em;
  top: 2rem;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Code = ({
  codeString,
  code,
  language = "jsx",
  collapsible = false,
  name,
}) => {
  const [copyText, setCopyText] = useState("Copy");
  const [isOpen, setIsOpen] = useState(false);

  const finalCode = codeString || code || "";

  const handleClick = () => {
    copyToClipboard(finalCode);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 1000);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  if (collapsible) {
    return (
      <div className="show-code">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
          }}
        >
          <input
            type="checkbox"
            id={`toggle-${name}`}
            checked={isOpen}
            onChange={handleToggle}
            style={{ marginRight: "0.5rem" }}
          />
          <label
            htmlFor={`toggle-${name}`}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            Show Code
          </label>
        </div>
        {isOpen && (
          <Highlight
            code={finalCode}
            language={language}
            theme={themes.nightOwl}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre>
                <CopyCode onClick={handleClick}>{copyText}</CopyCode>
                <Pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })} key={i}>
                      <LineNo>{i + 1}</LineNo>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={key} />
                      ))}
                    </div>
                  ))}
                </Pre>
              </Pre>
            )}
          </Highlight>
        )}
      </div>
    );
  }

  return (
    <Highlight code={finalCode} language={language} theme={themes.nightOwl}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre>
          <CopyCode onClick={handleClick}>{copyText}</CopyCode>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </Pre>
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
