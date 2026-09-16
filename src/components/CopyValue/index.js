import React, { useCallback, useEffect, useRef, useState } from "react";
import { copyToClipboard } from "../CodeBlock/copy-to-clipboard";
import { Box, CustomTooltip } from "@sistent/sistent";

const COPY_FEEDBACK_MS = 2000;

const CopyValue = ({ copyValue }) => {
  // "idle" | "copied" | "failed"
  const [copyState, setCopyState] = useState("idle");
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = useCallback(async () => {
    let result = "copied";
    try {
      await copyToClipboard(copyValue);
    } catch (error) {
      console.error("CopyValue: failed to copy value to clipboard", error);
      result = "failed";
    }

    setCopyState(result);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(
      () => setCopyState("idle"),
      COPY_FEEDBACK_MS,
    );
  }, [copyValue]);

  const isCopied = copyState === "copied";

  const getTooltipTitle = () => {
    if (copyState === "copied") {
      return "Copied";
    }
    if (copyState === "failed") {
      return "Copy failed";
    }
    return "Click to copy to clipboard";
  };

  return (
    <CustomTooltip
      title={getTooltipTitle()}
      enterDelay={600}
      leaveDelay={100}
      placement="right"
    >
      <Box
        component="button"
        role="button"
        tabIndex={0}
        aria-label={`Copy ${copyValue} to clipboard`}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px 8px",
          borderRadius: "4px",
          background: "transparent",
          fontFamily: "monospace",
          fontSize: "0.875rem",
          color: (theme) => theme.palette.text.primary,
          transition: "all 0.2s ease-in-out",
          outline: "none",
          border: "2px solid",
          width: "fit-content",
          minWidth: "200px",
          borderColor: "transparent",
          boxShadow: "none",
          "&:hover, &:focus, &:active": {
            backgroundColor: (theme) => theme.palette.action.hover,
            boxShadow: "none",
          },
          "&:focus, &:active": {
            borderColor: (theme) => theme.palette.primary.main,
            boxShadow: "none",
          },
          ...(isCopied && {
            borderColor: (theme) => theme.palette.primary.main,
            backgroundColor: (theme) => theme.palette.action.hover,
          }),
        }}
        onClick={handleCopy}
      >
        <span>{copyValue}</span>
      </Box>
    </CustomTooltip>
  );
};

export default CopyValue;