import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
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
  font-family: 'Courier New', Courier, monospace;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
    line-height: 12px;
    width: 50px;
    font-size: 10pt;
    font-family: tahoma;
    margin-top: 1px;
    margin-right: 2px;
    position:absolute;
    top:0;
    right:0;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Code = ({ codeString, language }) => {
  const [copyText, setCopyText] = useState("Copy");
  const handleClick = () => {
    copyToClipboard(codeString);
    setCopyText("Copied!");
    setTimeout(() => setCopyText("Copy"), 1000);
  };
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Pre>
          <CopyCode onClick={handleClick}>{copyText}</CopyCode>
          <Pre className={className} style={style}>

            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key}/>
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

