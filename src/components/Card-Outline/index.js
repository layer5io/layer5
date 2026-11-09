import React from "react";
import CardOutlineWrapper from "./card-outline.style";

const CardOutline = (props) => {
  return (
    <CardOutlineWrapper>
      <div className="card-outline">
        <div className="card-image">
          <img src={ props.img } alt={ props.alt } />
        </div>
        <div>
          <a href={ props.link } className="card-link">
            <h2 className="card-title">{ props.title }</h2>
            <p className="card-content">{ props.content }</p>
          </a>
        </div>
      </div>
    </CardOutlineWrapper>
  );
};

export default CardOutline;