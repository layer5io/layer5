import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import { BiLinkExternal } from "@react-icons/all-files/bi/BiLinkExternal";
import Image from "../image";
import { CardWrapper } from "./Card.style";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const Card = ({
  frontmatter,
  fields,
  loading = "lazy",
  fetchpriority = "auto",
  listView = false,
  fitContainer = false,
}) => {
  const { isDark } = useStyledDarkMode();
  const thumbnail =
    isDark &&
    frontmatter.darkthumbnail &&
    frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail?.publicURL
      ? frontmatter.darkthumbnail
      : frontmatter.thumbnail;

  const thumbnailWidth =
    thumbnail?.childImageSharp?.gatsbyImageData?.width || 480;
  const thumbnailHeight =
    thumbnail?.childImageSharp?.gatsbyImageData?.height || 270;

  return (
    <CardWrapper $listView={listView} $fitContainer={fitContainer}>
      <div className="post-block">
        <div className="post-thumb-block">
          <Image
            {...thumbnail}
            fitContainer={fitContainer}
            imgStyle={{ objectFit: listView ? "cover" : "contain" }}
            loading={loading}
            fetchpriority={fetchpriority}
            alt={frontmatter.title}
            width={thumbnailWidth}
            height={thumbnailHeight}
            aspectRatio={16 / 9}
          />
        </div>
        <div className="post-content-block">
          <h2 className="post-title">{frontmatter.title}</h2>
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
                <Link
                  className="readmore-btn"
                  to={fields.slug}
                  aria-label={`See more about ${frontmatter.title}`}
                >
                  see more <IoIosArrowRoundForward />
                </Link>
                <a
                  className="external-link-btn"
                  href={frontmatter.eurl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit external link for ${frontmatter.title}`}
                >
                  <BiLinkExternal />
                </a>
              </>
            )}
            {fields && fields.slug && !frontmatter.eurl && (
              <Link
                className="readmore-btn"
                to={fields.slug}
                aria-label={`See more about ${frontmatter.title}`}
              >
                see more <IoIosArrowRoundForward />
              </Link>
            )}
            {(!fields || !fields.slug) && frontmatter.eurl && (
              <a
                className="external-link-btn"
                href={frontmatter.eurl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit external link for ${frontmatter.title}`}
              >
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
