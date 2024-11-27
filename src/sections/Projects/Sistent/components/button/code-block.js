import React, { useState } from "react";
import Code from "../../../../../components/CodeBlock";

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
        <Code codeString={code} language="javascript" />
      )}
    </div>
  );
};
