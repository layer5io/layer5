import React from "react";
import { Link } from "gatsby";
import { TooltipWrapper, TooltipText } from "./Badge.styles";

const Badge = ({ name, to, className, src, alt }) => {
  return (
    <li>
      <Link to={to}>
        <TooltipWrapper>
          <img className={className} src={src} alt={alt}/>
          <TooltipText>{name}</TooltipText>
        </TooltipWrapper>
      </Link>
    </li>
  );
};

export default Badge;