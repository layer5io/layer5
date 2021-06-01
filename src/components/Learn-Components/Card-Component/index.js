import React from "react";
import CardWrapper from "./learn-card.style";
import Image from "../../image";
import { Link } from "gatsby";

const CardComponent = ({tutorial,link}) => {

  return (
    <CardWrapper>
      <Link to={link?link:tutorial.fields.learnpath} className='card-link'>
        <div style={{backgroundColor:tutorial.frontmatter.themeColor}} className="card-parent">
          <div>
            <div className="card-head">
              <h3>{tutorial.frontmatter.title ? tutorial.frontmatter.title : tutorial.frontmatter.courseTitle}</h3>
              {
                tutorial.frontmatter.status ? <p><span>New</span></p>:null
              }
            </div>
            <div className="card-desc">
              <p>{tutorial.frontmatter.description}</p>
              <p>{tutorial.frontmatter.learningPaths} learning paths</p>  
            </div>
            
          </div>
          <div className="card-image">
            <Image {...tutorial.frontmatter.cardImage} alt={tutorial.frontmatter.title} />
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
};

export default CardComponent;
