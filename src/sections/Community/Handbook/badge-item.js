import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const defaultImgStyle = {
  height: "25px",
  width: "25px",
  verticalAlign: "middle",
  marginRight: "1rem",
};

export default function BadgeItem({ title, description, image, href, to, imgStyle }) {
  const content = (
    <>
      {image && <img src={image} alt={`${title} badge`} style={imgStyle || defaultImgStyle} />}
      <b>{title}</b>
      {description ? <> — {description}</> : null}
    </>
  );

  return (
    <li style={{ listStyleType: "none" }}>
      {to ? <Link to={to}>{content}</Link> : href ? <a href={href}>{content}</a> : content}
    </li>
  );
}

BadgeItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  image: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
  imgStyle: PropTypes.object,
};
