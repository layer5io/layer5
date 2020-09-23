import React from "react";

import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const PageHeader = ({ categories, title, subtitle,  author, thumbnail }) => {
    return (
        <PageHeaderWrapper>
            <div className="page-header">
                <div className="feature-image">
                    {thumbnail && (
                        <Image {...thumbnail} imgStyle={{ objectFit: "contain"}}/>
                    )}</div>
                <h1>{title}</h1>
                {subtitle && (<h4><i>{subtitle}</i></h4>)}
                {categories && (
                    <div className="breadcrumbs post">
                        <h4>Tags:</h4>
                        {categories.map((category, index) => (
                            <span key={index}> {category} </span>
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
                {!author && title && (
                    <div className="breadcrumbs page">
                        <>
                            <span> Home </span> <span> {">"} </span> {title}
                        </>
                    </div>
                )}
            </div>
        </PageHeaderWrapper>
    );
};
export default PageHeader;
