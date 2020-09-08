import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ frontmatter, fields }) =>{
    return (
        <CardWrapper>
            <div className="post-block">
                <div className="post-thumb-block">
                    <Link className="anchor" to={fields.slug}>
                        <Image {...frontmatter.thumbnail} imgStyle={{ objectFit: "contain" }}/>
                    </Link>
                </div>
                <div className="post-content-block">
                    <h2 className="post-title">
                        <Link className="anchor" to={fields.slug}>
                            {frontmatter.title}
                        </Link>
                    </h2>
                    <div className="post-meta-block">
                        {frontmatter.author && (
                            <span>By: {frontmatter.author}</span>
                        )}
                        {frontmatter.date && (
                            <>
                                <span className="divider">/</span>
                                <span>{frontmatter.date}</span>
                            </>
                        )}
                        {frontmatter.abstract && (
                            <p className="post-entry">{ frontmatter.abstract }</p>
                        )}
                    </div>
                    <Link className="readmore-btn" to={fields.slug}>
                        see more <IoIosArrowRoundForward />
                    </Link>
                    {frontmatter.eurl && (
                        <a className="readmore-btn" href={frontmatter.eurl}>
                            <BiLinkExternal />
                        </a>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
};

export default Card;
