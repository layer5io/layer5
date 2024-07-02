import React, { useState } from "react";

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
        <pre className="code">
          <code lang="javascript">{code}</code>
        </pre>
      )}
    </div>
  );
};
