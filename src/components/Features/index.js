import React from "react";
import { Link } from "gatsby";
import { Container, ContentWrapper, ImageWrapper } from "./style.js";
import cursor from "../../assets/images/features-section/cursor.svg";

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
        <ImageWrapper>
          <img src={props.imgLink} alt="image" />
        </ImageWrapper>
        <div className="container" id="container"></div>
      </Container>
    </>
  );
};


export default Features;
