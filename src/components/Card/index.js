import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ frontmatter, fields }) => {
    return (
        <CardWrapper fixed={!!frontmatter.abstract}>
            <Link className="anchor" to={fields.slug}>
                <div className="post-block">
                    <div className="post-thumb-block">
                        <Image
                            {...frontmatter.thumbnail}
                            imgStyle={{ objectFit: "contain" }}
                            alt={frontmatter.title}
                        />
                    </div>
                    <div className="post-content-block">
                        <h2 className="post-title">
                            {frontmatter.title}
                        </h2>
                        <div className="post-meta-block">
                            {frontmatter.date && (
                                <>
                                    <p>{frontmatter.date}</p>
                                </>
                            )}
                            {frontmatter.author && <p className="author">{frontmatter.author}</p>}
                            {/* {frontmatter.abstract && (
                                <p className="post-entry">{frontmatter.abstract}</p>
                            )} */}
                        </div>
                        <div className="readmore-btn-wrapper">
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
                </div>
            </Link>
        </CardWrapper>
    );
};

export default Card;
