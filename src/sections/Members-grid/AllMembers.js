import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import MembersGrid from "./index";

const AllMembers = () =>{
    const data = useStaticQuery(
        graphql`
            query allMembers {
                allMdx(
                    sort: { fields: [frontmatter___name], order: ASC }
                    filter: { fields: { collection: { eq: "members" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            name
                            position
                            github
                            twitter
                            status
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
                    }
                }
            }
        `
    );

    return <MembersGrid data={data}/>
};

export default AllMembers;

