import React from "react";
import { Link } from "gatsby";
import { LogoListWrapper } from "./LogoList.style";

const LogoList = ({ logos, className }) => {
  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo) => {
          const content = <img src={logo.url} alt={logo.alt} />;
          const isExternal = logo.link && logo.link.startsWith("http");
          return (
            <li key={logo.url}>
              {logo.link ? (
                isExternal ? (
                  <a href={logo.link} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  <Link to={logo.link}>{content}</Link>
                )
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
