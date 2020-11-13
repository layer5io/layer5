import React from "react";

import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const PageHeader = ({ categories, title, subtitle,  author, thumbnail, path }) => {
    return (
        <PageHeaderWrapper>
            <div className="page-header">
                <div className="feature-image">
                    {thumbnail && (
                        <Image {...thumbnail} imgStyle={{ objectFit: "contain"}} alt={title}/>
                    )}</div>
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
                {!author && path && (
                    <div className="breadcrumbs page">
                        <>
                            <span> Home </span> <span> {">"} </span> {path}
                        </>
                    </div>
                )}
            </div>
        </PageHeaderWrapper>
    );
};
export default PageHeader;
