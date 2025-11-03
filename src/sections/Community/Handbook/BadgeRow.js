import React from "react";
import PropTypes from "prop-types";

const cell = { padding: "12px", verticalAlign: "middle" };
const badgeImg = { height: "50px", width: "50px", verticalAlign: "middle" };

const BadgeRow = ({ image, name, title, badgeKey, keycode, keyProp, description }) => {
  const displayName = name || title || "—";
  const displayKey = badgeKey || keycode || keyProp || "—";

  return (
    <tr>
      <td style={cell}>
        {typeof image === "string" ? (
          <img src={image} style={badgeImg} alt={displayName} />
        ) : (
          image
        )}
      </td>
      <td style={cell}>
        <b>{displayName}</b>
      </td>
      <td style={cell}>
        <code>{displayKey}</code>
      </td>
      <td style={cell}>{description || "—"}</td>
    </tr>
  );
};

BadgeRow.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  title: PropTypes.string,
  badgeKey: PropTypes.string,
  keycode: PropTypes.string,
  keyProp: PropTypes.string,
  description: PropTypes.node,
};

export default BadgeRow;
