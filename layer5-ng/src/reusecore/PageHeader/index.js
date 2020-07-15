import React from "react";

import ParticleComponent from "../Particle";
import PageHeaderWrapper from "./pageHeader.style";

const PageHeader = ({ categories, title, author }) => {
  return (
    <PageHeaderWrapper>
      <ParticleComponent />
      <div className="page-header">
        <h1>{title}</h1>
        {categories && (
          <div className="breadcrumbs post">
            <h4>In:</h4>
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
              <span> Home </span> <span> > </span> {title}
            </>
          </div>
        )}
      </div>
    </PageHeaderWrapper>
  );
};
export default PageHeader;
