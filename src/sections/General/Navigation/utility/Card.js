import React from "react";
import { Link } from "gatsby";
import { IoIosArrowRoundForward } from "@react-icons/all-files/io/IoIosArrowRoundForward";
import Image from "./image";

const Card = ({ frontmatter, fields }) => {
  if (frontmatter.thumbnail.img !== undefined) {
    return (
      <Link className="anchor" to={fields.slug}>
        <div className="post-block">
          <div className="post-thumb-block">
            <img src={frontmatter.thumbnail.img} alt={frontmatter.title} />
          </div>
          <div className="post-content-block">
            <h2 className="post-title">
              {frontmatter.title}
            </h2>
            <div className="readmore-btn-wrapper">
              <span className="readmore-btn">
                see more <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link className="anchor" to={fields.slug}>
        <div className="post-block">
          <div className="post-thumb-block">
            {(() => {
              const thumb = frontmatter.thumbnail || frontmatter.thumbnail_svg;
              if (!thumb) return null;
              return (
                <Image
                  childImageSharp={thumb.childImageSharp}
                  extension={thumb.extension}
                  publicURL={thumb.publicURL ? String(thumb.publicURL) : null}
                  imgStyle={{ objectFit: "cover" }}
                  alt={frontmatter.title}
                />
              );
            })()}
          </div>
          <div className="post-content-block">
            <h2 className="post-title">
              {frontmatter.title}
            </h2>
            <div className="readmore-btn-wrapper">
              <span className="readmore-btn">
                see more <IoIosArrowRoundForward />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
};

export default Card;
