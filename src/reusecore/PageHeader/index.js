import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";

import slugify from "../../utils/slugify";
import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const authorField = (author, isSlugAvailable) => {
  return(
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

const PageHeader = ({ category, title, subtitle,  author, thumbnail }) => {
  let isSlugAvailable = false;
  if(author){
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
        { thumbnail && <div className="feature-image">
          <Image {...thumbnail} imgStyle={{ objectFit: "contain"}} alt={title}/>
        </div>}
        <h1 className="page-title">{title}</h1>
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
                  <p>{authorField(author, isSlugAvailable)}</p>
                </span>
              </>
            )}
          </div>
        )}
        {!category && author && (
          <div className="breadcrumbs post">
            <h5>By:</h5>
            <span>{authorField(author, isSlugAvailable)}</span>
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
