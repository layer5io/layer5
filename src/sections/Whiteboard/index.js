import React, { useEffect } from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Container, Row } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.svg";
import Partners from "../Home/Partners-home";

const Whiteboard = () => {

  useEffect(() => {
    const scrollingImage = document.getElementById("whiteboard-svg");

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const translateY = -scrollPosition / 5;
      scrollingImage.style.transform = `rotateX(${translateY}deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <WhiteboardWrapper>
      <div className={"heading-container"}>
        <div className={"heading-image"}>
          <SectionTitle className={"section-title"}  >
            <h2>
              <span className={"whiteboard-heading"}>Whiteboarding</span>
            </h2>
            <span className={"whiteboard-text"}>All-in-one markdown editor, collaborative canvas, and diagram-as-code builder</span>
          </SectionTitle>
          <div className={"whiteboard-image"}>
            <img id={"whiteboard-svg"} src={whiteboard_svg} alt={""}/>
          </div>
        </div>
      </div>
      <Partners />
      <Container>
        <div className={"whiteboard-use-container"}>
          <SectionTitle className={"use-heading"}>
            <h2>
            Use whiteboarding for <span className={"highlighted-text"}>collaboration</span>
            </h2>
          </SectionTitle>
          <div className={"collaboration_display"}>
            <div className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </div>
            <div className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </div>
            <div className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Container>
      </Container>
    </WhiteboardWrapper>
  );
};

export default Whiteboard;