import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ frontmatter }) => {
    return (
        <CardWrapper fixed={!!frontmatter.abstract}>
            <div className="post-block">
                <div className="post-thumb-block">
                    <a className="anchor" rel="noreferrer" target="_blank" href={frontmatter.eurl}>
                        <Image
                            {...frontmatter.thumbnail}
                            imgStyle={{ objectFit: "contain" }}
                        />
                    </a>
                </div>
                <div className="post-content-block">
                    <h2 className="post-title">
                        <a className="anchor" rel="noreferrer" target="_blank" href={frontmatter.eurl}>
                            {frontmatter.title}
                        </a>
                    </h2>
                    <div className="post-meta-block">
                        {frontmatter.date && (
                            <span>{frontmatter.date}</span>
                                
                        )}
                        {frontmatter.date && (
                            <a className="readmore-btn" rel="noreferrer" target="_blank" href={frontmatter.eurl}>
                                <BiLinkExternal />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </CardWrapper>
    );
};

export default Card;
