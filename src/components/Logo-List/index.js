import React from "react";
import { Link } from "gatsby";
import { LogoListWrapper } from "./LogoList.style";

const LogoList = ({ logos, className }) => {
  const renderLogoItem = (logo) => {
    const title = logo.title || logo.alt;
    const imgElement = <img src={logo.url} alt={logo.alt} title={title} />;

    if (logo.link) {
      const isInternal =
        logo.link.startsWith("/") && !logo.link.startsWith("//");
      const isHash = logo.link.startsWith("#");

      if (isInternal) {
        return (
          <Link
            to={logo.link}
            title={title}
            aria-label={logo.alt}
            className="logo-link"
            onClick={logo.onClick}
          >
            {imgElement}
          </Link>
        );
      }

      if (isHash) {
        return (
          <a
            href={logo.link}
            title={title}
            aria-label={logo.alt}
            className="logo-link"
            onClick={logo.onClick}
          >
            {imgElement}
          </a>
        );
      }

      return (
        <a
          href={logo.link}
          target={logo.target || "_blank"}
          rel={logo.target === "_self" ? undefined : "noopener noreferrer"}
          title={title}
          aria-label={logo.alt}
          className="logo-link"
          onClick={logo.onClick}
        >
          {imgElement}
        </a>
      );
    }

    if (logo.onClick) {
      return (
        <button
          type="button"
          className="logo-link logo-btn"
          onClick={logo.onClick}
          title={title}
          aria-label={logo.alt}
        >
          {imgElement}
        </button>
      );
    }

    return imgElement;
  };

  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo, index) => (
          <li key={logo.key || `${logo.url}-${index}`}>
            {renderLogoItem(logo)}
          </li>
        ))}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
