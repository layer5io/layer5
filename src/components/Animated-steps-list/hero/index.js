import React from "react";
import Button from "../../../reusecore/Button";
import { HeroWrapper } from "./hero.style";
import Code from "../../../components/CodeBlock";


const Hero = ({ title, initialdescription, enddescription, subtitle, links, code }) => {
  return (
    <HeroWrapper>
      <div className="content">
        <h5 className="subtitle">{subtitle}</h5>
        <h1>{title}</h1>
        <p>{initialdescription}</p>
        <div className="links">
          {links && links.map((link) => {
            return (
              <Button primary key={link.text} title={link.text} url={link.url} external={link.external}/>
            );
          })}
        </div>
        <div className="code">
          <Code codeString={code}/>
        </div>
        <p className="enddescr">{enddescription}</p>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
