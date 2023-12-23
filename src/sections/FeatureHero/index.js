import React, { useEffect } from "react";
import FeatureHeroWrapper from "./featureHero.style";
import { Container } from "../../reusecore/Layout";

const FeatureHero = (props) => {

  useEffect(() => {
    const scrollingImage = document.getElementById("whiteboard-svg");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const translateY = -scrollPosition / 16;
      scrollingImage.style.transform = `rotateX(${translateY}deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FeatureHeroWrapper>
      <Container className={"heading-container"}>
        <div className={"section-title"} >
          <h2 className={"whiteboard-heading"}>
            {props.data.heading}
          </h2>
          <p className={"whiteboard-text"}>{props.data.sub_heading}</p>
        </div>
        <div className={"whiteboard-image"}>
          <img id={"whiteboard-svg"} src={props.data.image} alt={""} />
        </div>
      </Container>
    </FeatureHeroWrapper>
  );
};

export default FeatureHero;