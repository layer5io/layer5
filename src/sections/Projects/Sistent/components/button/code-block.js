import React, { useState } from "react";
import Code from "../../../../../components/CodeBlock";
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
       {showCode && isDark && (
        <Code codeString={code} language="javascript" />
      )}
       {showCode && !isDark && (
        <pre className="code">
          <code lang="javascript">{code}</code>
        </pre>
      )}
    </div>
  );
};
