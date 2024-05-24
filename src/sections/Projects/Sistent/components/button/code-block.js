import React, { useState } from "react";
import { docco, irBlack } from "react-syntax-highlighter/dist/esm/styles/hljs";

import SyntaxHighlighter from "react-syntax-highlighter";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const CodeBlock = ({ name, code }) => {
  const { isDark } = useStyledDarkMode();
  const [showCode, setShowCode] = useState(false);

  const onChange = () => {
    setShowCode((prev) => !prev);
  };

  return (
    <div className="show-code">
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <label htmlFor={name} className="label">
        Show Code
      </label>
      {showCode && (
        <SyntaxHighlighter
          language="javascript"
          className="code"
          style={isDark ? irBlack : docco}
        >
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
