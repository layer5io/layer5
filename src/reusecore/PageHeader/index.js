import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import slugify from "../../utils/slugify";
import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";
import layer5_img from "../../assets/images/layer5/layer5-only/svg/layer5-gray-no-trim.svg";

const authorField = (author, isSlugAvailable) => {
  return (
    <>
      {
        isSlugAvailable ?
          <Link to={`/community/members/${slugify(author.name)}`}>
            <span>{author.name}</span>
          </Link>
          : <span>{author.name}</span>
      }
    </>
  );
};

const PageHeader = ({ category, title, img, feedlink, subtitle, author, thumbnail, superscript, date }) => {
  let isSlugAvailable = false;
  if (author) {
    const validMembers = useStaticQuery(
      graphql`
                query validMemberss{
                    allMdx(
                        filter:{
                            fields:{ collection:{eq:"members"} }
                        }
                    ) {
                        nodes {
                            frontmatter {
                                name
                            }
                        }
                    }
                }
            `
    );
    isSlugAvailable = validMembers.allMdx.nodes.some(matter => matter.frontmatter.name == author.name);
  }
  return (
    <PageHeaderWrapper>
      <div className="page-header">
        {thumbnail && <div className="feature-image">
          <Image {...thumbnail} imgStyle={{ objectFit: "contain" }} alt={title} />
        </div>}
        <h1 className="page-title" >{title}  <sup className="supscript">{superscript}</sup>{img && feedlink && (<a href={feedlink} target="_blank" rel="noreferrer"> <img src={img} alt="RSS Feed" /> </a>)} </h1>
        {subtitle && (<h3>{subtitle}</h3>)}
        {category && (
          <div className="breadcrumbs">
            <span>
              <h5>Category:</h5>
              <p key={category}>
                <Link to={`/blog/category/${slugify(category)}`}>
                  <span>{category}</span>
                </Link>
              </p>
            </span>
            {author && (
              <>
                <span>
                  <h5>By:</h5>
                  {author.name === "Layer5 Team"
                    ? <p><img src={layer5_img} alt="Layer5" width="85" /> Team</p>
                    : <p>{authorField(author, isSlugAvailable)}</p>
                  }
                </span>
              </>
            )}
            {date && (
              <>
                <span>
                  <h5>On:</h5>
                  <p>{date}</p>
                </span>
              </>
            )}
          </div>
        )}
        {!category && author && (
          <div className="breadcrumbs post">
            <h5>By:</h5>
            <span>{authorField(author, isSlugAvailable)}</span>
            {date && (
              <span>
                <h5>On:</h5>
                <p>{date}</p>
              </span>
            )}
          </div>
        )}
        {/*{!author && path && (*/}
        {/*    <div className="breadcrumbs page">*/}
        {/*        <>*/}
        {/*            <span> Home </span> <span> {">"} </span> {path}*/}
        {/*        </>*/}
        {/*    </div>*/}
        {/*)}*/}
      </div>
    </PageHeaderWrapper>
  );
};
export default PageHeader;
