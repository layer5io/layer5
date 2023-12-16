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
        {/* <Link to={props.redirectLink}> */}
        {props.animationOne ? (<ImageWrapper>
          <Link to={props.redirectLink}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapper>) : (<ImageWrapperTwo>
          <Link to={props.redirectLink}>
            <img src={props.imgLink} alt="image" />
          </Link>
        </ImageWrapperTwo>)}
        {/* </Link> */}
      </Container>
    </>
  );
};


export default Features;
