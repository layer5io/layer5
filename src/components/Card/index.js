import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLinkExternal } from "react-icons/bi";
import Image from "../image";

import { CardWrapper } from "./Card.style";

const Card = ({ frontmatter, fields }) => {
  return (
    <CardWrapper fixed={!!frontmatter.abstract}>
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
            {frontmatter.date && frontmatter.author &&(
              <>
                <p>{frontmatter.date}</p>
                <p className="author">{frontmatter.author}</p>
              </>
            )}
            {frontmatter.date && !frontmatter.author && (
              <p>{frontmatter.date}</p>
            )}
            {!frontmatter.date && frontmatter.author && (
              <p className="author">{frontmatter.author}</p>
            )}
          </div>
          <div className="readmore-btn-wrapper">
            { fields && fields.slug && frontmatter.eurl && (
              <>
                <Link className="readmore-btn" to={fields.slug}>
                                    see more <IoIosArrowRoundForward />
                </Link>
                <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              </>
            )}
            { fields && fields.slug && !frontmatter.eurl && (
              <Link className="readmore-btn" to={fields.slug}>
                                see more <IoIosArrowRoundForward />
              </Link>
            )}
            {!fields && !fields.slug && frontmatter.eurl && (
              <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
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
