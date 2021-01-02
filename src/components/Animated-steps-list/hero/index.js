import React from "react";
import Button from "../../../reusecore/Button";
import { HeroWrapper } from "./hero.style";


const Hero = ({ title, description, subtitle, links }) => {
    return(
        <HeroWrapper>
            <div className="content">
                <h5 className="subtitle">{subtitle}</h5>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="links">
                    {links.map((link) => {
                        return (
                            <Button secondary key={link.text} title={link.text} url={link.url}/>
                        );
                    })}
                </div>
            </div>
        </HeroWrapper>
    );
};

export default Hero;
