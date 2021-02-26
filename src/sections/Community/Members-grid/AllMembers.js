import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MembersGrid from "./index";

const AllMembers = props => {
  const data = useStaticQuery(
    graphql`
            query allMembers {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { published: { eq: true } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            github
                            twitter
                            status
                            meshmate
                            linkedin
                            location
                            badges
                            bio
                            image_path{
                                childImageSharp{
                                    fluid(maxWidth: 200){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                        fields{
                            slug
                        }
                    }
                }
            }
        `
  );

  return <MembersGrid data={data} {...props}/>;
};

export default AllMembers;
