import React from "react";
import { Link } from "gatsby";
import { LogoListWrapper } from "./LogoList.style";

const renderLogoItem = (logo) => {
  const image = <img src={logo.url} alt={logo.alt} />;
  if (!logo.link) {
    return image;
  }

  if (logo.link.startsWith("/")) {
    return (
      <Link to={logo.link} aria-label={logo.alt || undefined}>
        {image}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//i.test(logo.link);
  return (
    <a
      href={logo.link}
      aria-label={logo.alt || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={logo.onClick}
    >
      {image}
    </a>
  );
};

const LogoList = ({ logos, className }) => {
  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo) => (
          <li key={logo.url}>{renderLogoItem(logo)}</li>
        ))}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
