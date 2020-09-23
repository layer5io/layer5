import React from "react";

import ParticleComponent from "../Particle";
import PageHeaderWrapper from "./pageHeader.style";
import img from "./feature-image.svg";

const PageHeader = ({ categories, title, subtitle,  author }) => {
    return (
        <PageHeaderWrapper>
            <ParticleComponent />
            <div className="page-header">
                {author && (
                    <div className="feature-image" 
                        style ={{ backgroundImage: `url(${img})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                )}
                <h1>{title}</h1>
                {subtitle && (<span><i>{subtitle}</i></span>)}
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
