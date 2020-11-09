import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import MembersGrid from "./index";

const ActiveMembers = props =>{
    const data = useStaticQuery(
        graphql`
            query activeMembers {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } }, frontmatter: { status: { eq: "Active" } } }
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

export default ActiveMembers;

