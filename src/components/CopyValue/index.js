import React, { useCallback, useState } from "react";
import { copyToClipboard } from "../CodeBlock/copy-to-clipboard";
import { Box, CustomTooltip } from "@sistent/sistent";

const CopyValue = ({ copyValue }) => {
  const [copyState, setCopyState] = useState({
    isCopied: false
  });

  const handleCopy = useCallback(async () => {
    await copyToClipboard(copyValue);

    setCopyState({
      isCopied: true,
    });

    setTimeout(() => {
      setCopyState({
        isCopied: false,
      });
    }, 2000);
  }, [copyValue]);


  const getTooltipTitle = () => {
    if (copyState.isCopied) {
      return "Copied";
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
          ...(copyState.isCopied && {
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