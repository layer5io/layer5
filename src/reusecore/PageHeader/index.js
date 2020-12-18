import React from "react";

import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const PageHeader = ({ categories, title, subtitle,  author, thumbnail, path, sub_header }) => {
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
                {categories && (
                    <div className="breadcrumbs post">
                        <h4>Tags:</h4>
                        {categories.map((category, index) => (
                            <span key={index}> {category}&nbsp;</span>
                        ))}
                        {author && (
                            <>
                                <h4>By:</h4> <span>{author.name}</span>
                            </>
                        )}
                    </div>
                )}
                {!categories && author && (
                    <div className="breadcrumbs post">
                        <h4>By:</h4> <span>{author.name}</span>
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
