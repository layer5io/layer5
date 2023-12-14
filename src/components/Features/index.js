import React from "react";
import { Link } from "gatsby";
import { Container, ContentWrapper, ImageWrapper, ImageWrapperTwo } from "./style.js";
import cursor from "./images/cursor.svg";

const Features = (props) => {

  const style = {
    cursor: props.show_custom_cursor ? `url(${cursor}), auto` : "",
  };

  return (
    <>
      <Container style={style}>
        <ContentWrapper>
          <h2>{props.title}</h2>
          <p className="text">{props.desc}</p>
          <Link to={props.redirectLink}>Learn more &rarr;</Link>
        </ContentWrapper>
        {props.show_custom_cursor ? (<ImageWrapper>
          <img src={props.imgLink} alt="image" />
        </ImageWrapper>) : (<ImageWrapperTwo>
          <img src={props.imgLink} alt="image" />
        </ImageWrapperTwo>)}
      </Container>
    </>
  );
};


export default Features;
