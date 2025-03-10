import React, { useEffect } from "react";
import FeatureHeroWrapper from "./featureHero.style";
import { Container } from "../../reusecore/Layout";
import Button from "../../reusecore/Button";
const FeatureHero = (props) => {
  useEffect(() => {
    const scrollingImage = document.getElementById("whiteboard-svg");

    const handleScroll = () => {
      const imageRect = scrollingImage.getBoundingClientRect();
      const isImageAtTop = imageRect.top <= 110;

      if (isImageAtTop) {
        const scrollPosition = window.scrollY;
        const translateY = -scrollPosition / 50;
        scrollingImage.style.transform = `rotateX(${translateY}deg)`;
      } else {
        scrollingImage.style.transform = null;
      }
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
            $primary
            title="Try Now!"
            $url="https://cloud.layer5.io"
            $external={true}
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
