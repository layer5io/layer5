import React from "react";

import PageHeaderWrapper from "./pageHeader.style";
import Image from "../../components/image";

const PageHeader = ({ categories, title, subtitle,  author, thumbnail }) => {
    return (
        <PageHeaderWrapper>
            <div className="page-header">
                {author && (
                    <Image {...thumbnail} className="feature-image" imgStyle={{ objectFit: 'contain'}}/>
                )}
                <h1>{title}</h1>
                {subtitle && (<h3><i>{subtitle}</i></h3>)}
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
                {!categories && title && (
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
