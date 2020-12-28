import React from "react";
import {Link, graphql, useStaticQuery} from "gatsby";

import slugify from "../../utils/slugify";
import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const authorField = (author, isSlugAvailable) =>{
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

const PageHeader = ({ category, title, subtitle,  author, thumbnail, path, sub_header }) => {
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
        isSlugAvailable = validMembers.allMdx.nodes.some(matter=> matter.frontmatter.name == author.name);
    }
    return (
        <PageHeaderWrapper>
            {/* NOTE:
                    className 'page_header' is used if the haeding is displayed as the Page heading
                    className 'sub_header' is used if the heading is displayed in the subsection of any page
            */}
            <div className={sub_header ? "sub_header" : "page-header"}>
                { thumbnail && <div className="feature-image">
                    <Image {...thumbnail} imgStyle={{ objectFit: "contain"}} alt={title}/>
                </div>}
                <h1>{title}</h1>
                {subtitle && (<h4>{subtitle}</h4>)}
                {category && (
                    <div className="breadcrumbs">
                        <span>
                            <h4>Category:</h4>
                            <p key={category}>{category}</p>
                        </span>
                        {author && (
                            <>
                                <span>
                                    <h4>By:</h4>
                                    <p>{authorField(author, isSlugAvailable)}</p>
                                </span>
                            </>
                        )}
                    </div>
                )}
                {!category && author && (
                    <div className="breadcrumbs post">
                        <h4>By:</h4>
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
