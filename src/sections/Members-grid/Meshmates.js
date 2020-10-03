import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MembersGrid from "./index";

const Meshmates=props => {
    const data=useStaticQuery(
        graphql`
            query meshmates {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { meshmate: { eq: "true" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            github
                            twitter
                            status
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

export default Meshmates;

