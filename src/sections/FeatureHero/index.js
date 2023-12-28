import React, { useEffect } from "react";
import FeatureHeroWrapper from "./featureHero.style";
import { Container } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
const FeatureHero = (props) => {
  useEffect(() => {
    const scrollingImage = document.getElementById("whiteboard-svg");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const translateY = scrollPosition / 16;
      const finalRotateAngle = Math.min(translateY, 12);
      scrollingImage.style.transform = `rotateX(${12 - finalRotateAngle}deg)`;
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
        <div className={"section-title"}>
          <h1 className={"whiteboard-heading"}>{props.data.heading}</h1>
          <p className={"whiteboard-text"}>{props.data.sub_heading}</p>
          <Button
            primary
            title="Try Now!"
            url="https://play.meshery.io"
            external={true}
          />
        </div>
        <div className={"whiteboard-image"}>
          <img id={"whiteboard-svg"} src={props.data.image} alt={""} />
        </div>
      </Container>
    </FeatureHeroWrapper>
  );
};

export default FeatureHero;
