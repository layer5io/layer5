import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import EmeritusGrid from './index'

const Emeritus=props => {
    const data=useStaticQuery(
        graphql`
            query emeritus {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { emeritus: { eq: "yes" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            github
                            twitter
                            status
                            meshmate
                            emeritus
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

    return <EmeritusGrid data={data} {...props} />;
};

export default Emeritus;

