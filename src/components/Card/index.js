import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import Image from "../image";
import { CardWrapper } from "./Card.style";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const Card = ({ frontmatter, fields }) => {

  const { isDark } = useStyledDarkMode();
  const theme = isDark ? "dark" : "light";

  return (
    <CardWrapper fixed={!!frontmatter.abstract}>
      <div className="post-block">
        <div className="post-thumb-block">
          <Image
            {...(theme === "dark" ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
            imgStyle={{ objectFit: "contain" }}
            alt={frontmatter.title}
          />
        </div>
        <div className="post-content-block">
          <h2 className="post-title">
            {frontmatter.title}
          </h2>
          <div className="post-meta-block">
            {frontmatter.date && frontmatter.author && (
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
            {!frontmatter.author && frontmatter.type && (
              <p className="type">{frontmatter.type}</p>
            )}
          </div>
          <div className="readmore-btn-wrapper">
            {fields && fields.slug && frontmatter.eurl && (
              <>
                <Link className="readmore-btn" to={fields.slug}>
                  see more <IoIosArrowRoundForward />
                </Link>
                <a className="external-link-btn" href={frontmatter.eurl} target="_blank" rel="noreferrer">
                  <BiLinkExternal />
                </a>
              </>
            )}
            {fields && fields.slug && !frontmatter.eurl && (
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
