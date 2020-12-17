import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../../../components/image";

const Card = ({ frontmatter, fields }) => {
    return (
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
    );
};

export default Card;
