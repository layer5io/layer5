import React from "react";
import {Link} from "gatsby";
import Button from "../../../reusecore/NewButton";
import { HeroWrapper } from "./hero.style";


const Hero = ({ title, description, subtitle, links }) => {
    return(
        <HeroWrapper>
            <div className="content">
                <h1>{title}</h1>
                <p className="subtitle">{subtitle}</p>
                <p className="description">{description}</p>
                <div className="links">
                    {links.map((link) => {
                        return (
                            <Link key={link.text} to={link.url}>
                                <Button secondary>{link.text}</Button>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </HeroWrapper>
    );
};

export default Hero;
