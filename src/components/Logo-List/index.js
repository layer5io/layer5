import React from "react";
import { LogoListWrapper } from "./LogoList.style";

const LogoList = ({ logos, className }) => {
  return (
    <LogoListWrapper className={className}>
      <ul>
        {logos.map((logo) => (
          <li key={logo.url}>
            <img src={logo.url} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </LogoListWrapper>
  );
};

export default LogoList;
