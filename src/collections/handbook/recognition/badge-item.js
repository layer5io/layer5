import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
  height: "50px",
  width: "50px",
  verticalAlign: "middle",
  marginRight: "1rem",
};


const BadgeItem = ({ title, description, image, href, to }) => {
  const content = (
    <>
      {typeof image === "string" ? (
        <img src={image} alt={title} style={imgStyle} />
      ) : (
        image
      )}
      <b>{title}</b>
      {description ? <> — {description}</> : null}
    </>
  );

  if (href) {
    return (
      <li style={{ marginBottom: "0.5rem" }}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </li>
    );
  }

  if (to) {
    return (
      <li style={{ marginBottom: "0.5rem" }}>
        <a href={to}>{content}</a>
      </li>
    );
  }

  return <li style={{ marginBottom: "0.5rem" }}>{content}</li>;
};

BadgeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  href: PropTypes.string,
  to: PropTypes.string,
};

export default BadgeItem;
