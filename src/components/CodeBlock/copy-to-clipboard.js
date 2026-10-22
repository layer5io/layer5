// Adapted from https://github.com/gatsbyjs/gatsby/blob/master/www/src/utils/copy-to-clipboard.js

// Copies `str` to the clipboard. Resolves when the copy succeeded and rejects
// with an Error when it did not, including on the legacy fallback path.
export const copyToClipboard = async (str) => {
  const clipboard = window.navigator.clipboard;
  if (clipboard && typeof clipboard.writeText === "function") {
    await clipboard.writeText(str);
    return;
  }

  // Fallback for browsers without the async Clipboard API.
  const textarea = document.createElement("textarea");
  textarea.value = str;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  try {
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    if (!document.execCommand("copy")) {
      throw new Error("document.execCommand(\"copy\") was rejected by the browser");
    }
  } finally {
    document.body.removeChild(textarea);
  }
};
