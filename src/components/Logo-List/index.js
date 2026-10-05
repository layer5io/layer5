import React from "react";
import { LogoListWrapper } from "./LogoList.style";

const LogoList = ({ logos, className }) => {
  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo) => (
          <li key={logo.url}>
            {logo.link ? (
              <a
                href={logo.link}
                target={logo.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  logo.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <img src={logo.url} alt={logo.alt} />
              </a>
            ) : (
              <img src={logo.url} alt={logo.alt} />
            )}
          </li>
        ))}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
