import React, { useState, useId } from "react";
import Code from "../../../../../components/CodeBlock";

export const CodeBlock = ({ name, code }) => {
  const id = useId();
  const [showCode, setShowCode] = useState(false);
  const onChange = () => {
    setShowCode((prev) => !prev);
  };
  return (
    <div className="show-code">
      <input type="checkbox" name={name} id={id} onChange={onChange} />
      <label htmlFor={id} className="label">
        Show Code
      </label>
      {showCode && <Code codeString={code} language="javascript" />}
    </div>
  );
};
