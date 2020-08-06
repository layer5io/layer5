import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";
import { copyToClipboard } from "./copy-to-clipboard";

export const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
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
  position: -webkit-sticky;
  position: absolute;
  right: 0;
  z-index: 1;
  border: 0;
  border-radius: 3px;
  margin: 2em;
  opacity: 0.3;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Code = ({ codeString, language }) => {
    const handleClick = () => {
        copyToClipboard(codeString);
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
                    <CopyCode onClick={handleClick}>Copy</CopyCode>
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

