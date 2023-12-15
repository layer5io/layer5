import React, { useEffect } from "react";
import SectionTitle from "../../reusecore/SectionTitle";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.svg";
import FeatureHeroWrapper from "./featureHero.style";
import { Container } from "../../reusecore/Layout";

const FeatureHero = (props) => {

  useEffect(() => {
    const scrollingImage = document.getElementById("whiteboard-svg");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const translateY = -scrollPosition / 2.5;
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
        <div className={"heading-image"}>
          <SectionTitle className={"section-title"}  >
            <h2>
              <span className={"whiteboard-heading"}>{props.data.heading}</span>
            </h2>
            <span className={"whiteboard-text"}>{props.data.sub_heading}</span>
          </SectionTitle>
          <div className={"whiteboard-image"}>
            <img id={"whiteboard-svg"} src={props.data.image} alt={""}/>
          </div>
        </div>
      </Container>
    </FeatureHeroWrapper>
  );
};

export default FeatureHero;