import React, { useState } from "react";
import { Button, SistentThemeProvider } from "@layer5/sistent";
import { useStyledDarkMode } from "../../../../../theme/app/useStyledDarkMode";

export const CodeBlock = ({ name, code }) => {
  const [showCode, setShowCode] = useState(false);
  const { isDark } = useStyledDarkMode();

  const onChange = () => {
    setShowCode((prev) => !prev);
  };

  const handleCopy = () => {
    const codeElement = document.querySelector(".code");
    const selection = window.getSelection();
    const range = document.createRange();

    range.selectNodeContents(codeElement);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand("copy");
      // Update button text to indicate successful copy (optional)
      const copyButton = document.querySelector(".copy-button");
      copyButton.textContent = "Copied!";
      setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 2000); // Reset button text after 2 seconds
    } catch (err) {
      console.error("Failed to copy code:", err);
      // Handle potential errors (optional: show an error message)
    } finally {
      selection.removeAllRanges(); // Clean up selection
    }
  };

  return (
    <div className="show-code" style={{ position: "relative" }}>
      <input type="checkbox" name={name} id={name} onChange={onChange} />
      <label htmlFor={name} className="label">
        Show Code
      </label>
      {showCode && (
        <div className="code-container">
          <pre className="code">
            <code lang="javascript">{code}</code>
          </pre>
          <SistentThemeProvider initialMode={isDark ? "dark" : "light"}>
            <Button className="copy-button" onClick={handleCopy} style={{ position: "absolute", top: "12px", right: "12px" }} variant="contained">COPY</Button>
          </SistentThemeProvider>
        </div>
      )}
    </div>
  );
};
