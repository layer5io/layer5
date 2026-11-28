import React from "react";
import { Link } from "gatsby";
import { LogoListWrapper } from "./LogoList.style";

const LogoList = ({ logos, className }) => {
  const renderLogo = (logo) => {
    const img = <img src={logo.url} alt={logo.alt} />;

    if (logo.link) {
      const isExternal = logo.external || /^https?:\/\//.test(logo.link);
      if (isExternal) {
        return (
          <a
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={logo.alt}
            title={logo.alt}
            onClick={logo.onClick}
          >
            {img}
          </a>
        );
      }
      if (logo.link.startsWith("#")) {
        return (
          <a
            href={logo.link}
            aria-label={logo.alt}
            title={logo.alt}
            onClick={logo.onClick}
          >
            {img}
          </a>
        );
      }
      return (
        <Link
          to={logo.link}
          aria-label={logo.alt}
          title={logo.alt}
          onClick={logo.onClick}
        >
          {img}
        </Link>
      );
    }

    if (logo.onClick) {
      return (
        <button
          type="button"
          onClick={logo.onClick}
          aria-label={logo.alt}
          title={logo.alt}
        >
          {img}
        </button>
      );
    }

    return img;
  };

  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo) => (
          <li key={logo.url}>{renderLogo(logo)}</li>
        ))}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
