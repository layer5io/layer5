import React from "react";
import PropTypes from "prop-types";
import CalloutStyle from "./callout.style.js";

const TYPE_CONFIG = {
  note: { label: "Note", icon: "ℹ" },
  tip: { label: "Tip", icon: "💡" },
  warning: { label: "Warning", icon: "⚠" },
  caution: { label: "Caution", icon: "⚠" },
  important: { label: "Important", icon: "❗" },
};

const Callout = ({ type, title, children }) => {
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.note;
  return (
    <CalloutStyle type={type}>
      <div className="callout-header">
        <span className="callout-icon" aria-hidden="true">
          {config.icon}
        </span>
        <span className="callout-title">{title || config.label}</span>
      </div>
      <div className="callout-body">{children}</div>
    </CalloutStyle>
  );
};

Callout.propTypes = {
  type: PropTypes.oneOf(["note", "tip", "warning", "caution", "important"]),
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Callout.defaultProps = {
  type: "note",
};

export default Callout;
