import React from "react";
import MembersGrid from "./index";
import { useStaticQuery, graphql } from "gatsby";

const Meshmate = props => {
  const data=useStaticQuery(
    graphql`
            query Meshmate {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { meshmate: { eq: "yes" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            github
                            twitter
                            status
                            linkedin
                            location
                            badges
                            bio
                            meshmate
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
  return <MembersGrid data={data} {...props} />;
};

export default Meshmate;



