import React from "react";
import CardWrapper from "./card.component.style";
import Image from "../../image";
import { Link } from "gatsby";
const CardComponent = ({tutorial}) => {

  return (
    <CardWrapper>
      <Link to={tutorial.fields.learnpath} className='link-a'>
        <div style={{backgroundColor:tutorial.frontmatter.themeColor}} className="card-parent">
          <div>
            <div className="card-head">
              <h3>{tutorial.frontmatter.title}</h3>
              {
                tutorial.frontmatter.status ? <p><span>New</span></p>:null
              }
            </div>
            <div className="card-head-desc">
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
