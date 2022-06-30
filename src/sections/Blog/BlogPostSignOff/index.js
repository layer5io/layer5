import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import slugify from "../../../utils/slugify";
import layer5_img from "../../../assets/images/layer5/layer5-only/svg/layer5-gray-no-trim.svg";
import BlogPostSignOffWrapper from "./blogpost-signoff.styles";

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

const BlogPostSignOff = ({ author }) => {
  let isSlugAvailable = false;
  if (author){
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
      - {author.name === "Layer5 Team"
        ? <p className="sign-off"><img src={layer5_img} alt="Layer5" /> Team</p>
        : <p className="sign-off">{authorField(author, isSlugAvailable)}</p>
      }
    </BlogPostSignOffWrapper>
  );
};
export default BlogPostSignOff;