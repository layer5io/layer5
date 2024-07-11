import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const CodeBlock = ({ name, code }) => {
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
        <SyntaxHighlighter language="javascript" style={docco}>
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
};
