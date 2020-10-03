import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MeshmatesGrid from "../Meshmates-grid/index";

const Meshmates=props => {
    const data=useStaticQuery(
        graphql`
            query meshmates {
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

    return <MeshmatesGrid data={data} {...props} />;
};

export default Meshmates;

