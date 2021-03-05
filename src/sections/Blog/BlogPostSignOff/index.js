import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";
import slugify from "../../../utils/slugify";
import BlogPostSignOffWrapper from "./blogpost-signoff.styles";

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

const BlogPostSignOff = ({ author}) => {
  let isSlugAvailable = false;
  if(author){
    const validMembers = useStaticQuery(
      graphql`
            query blogvalidMemberss{
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
    <BlogPostSignOffWrapper>
      - <p className="sign-off">{authorField(author, isSlugAvailable)}</p>
    </BlogPostSignOffWrapper>
  );
};
export default BlogPostSignOff;