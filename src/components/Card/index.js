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
}) => {
  const { isDark } = useStyledDarkMode();
  const thumbnail =
    isDark &&
    frontmatter.darkthumbnail &&
    frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL
      ? frontmatter.darkthumbnail
      : frontmatter.thumbnail;

  const width = thumbnail?.childImageSharp?.gatsbyImageData?.width;
  const height = thumbnail?.childImageSharp?.gatsbyImageData?.height;
  const isSquareOrPortrait = width && height && width / height <= 1.25;

  const isLogo =
    thumbnail?.extension === "svg" ||
    thumbnail?.publicURL?.endsWith(".svg") ||
    isSquareOrPortrait ||
    thumbnail?.publicURL?.toLowerCase()?.includes("logo") ||
    thumbnail?.publicURL?.toLowerCase()?.includes("icon") ||
    thumbnail?.publicURL?.toLowerCase()?.includes("cncf-landscape") ||
    thumbnail?.publicURL?.toLowerCase()?.includes("academy") ||
    thumbnail?.publicURL?.toLowerCase()?.includes("docker-swarm") ||
    thumbnail?.publicURL?.toLowerCase()?.includes("smp");

  return (
    <CardWrapper fixed={!!frontmatter.abstract} $listView={listView}>
      <div className="post-block">
        <div className="post-thumb-block">
          <Image
            {...thumbnail}
            imgStyle={{
              objectFit:
                frontmatter.thumbnailFit || (isLogo ? "contain" : "cover"),
              transform: isLogo ? "scale(0.92)" : "none",
            }}
            loading={loading}
            fetchpriority={fetchpriority}
            alt={frontmatter.title}
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
