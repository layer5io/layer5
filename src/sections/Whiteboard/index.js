import React, { useEffect } from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Col, Container, Row } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.svg";
import Partners from "../Home/Partners-home";
import square from "../../assets/images/whiteboard/square.svg";
import hexagon from "../../assets/images/whiteboard/hexagon.svg";
import pentagon from "../../assets/images/whiteboard/pentagon.svg";
import octagon from "../../assets/images/whiteboard/octagon.svg";
import cursor_1 from "../../assets/images/whiteboard/cursor-1.svg";
import cursor_2 from "../../assets/images/whiteboard/cursor-2.svg";
import Button from "../../reusecore/Button";

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
            <Col sm={12} md={6} lg={4} className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </Col >
            <Col sm={12} md={6} lg={4} className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </Col >
            <Col sm={12} md={6} lg={4} className={"display-container"}>
              <div className={"image-container"}>
                {/*<img/>*/}
              </div>
              <p className={"image-heading"}>Choose from multiple shapes</p>
              <span>
                Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.
                Use templates to get a head start
              </span>
            </Col >
          </div>
        </div>
      </Container>
      <Container className={"see-you"} id={"see-you-canvas"}>
        <div className={"headings"}>
          <span className={"use-heading"}><h2>See you in the <span className={"highlighted-text"}>canvas</span></h2></span>
          Unlock your team's collaborative superpowers.
        </div>
        <div >
          <img className={"square"} src={square} alt={""}/>
        </div>
        <div >
          <img className={"pentagon"} src={pentagon} alt={""}/>
        </div>
        <div >
          <img className={"hexagon"} src={hexagon} alt={""}/>
        </div>
        <div >
          <img className={"heptagon"} src={octagon} alt={""}/>
        </div>
        <div >
          <img className={"cursor_1"} src={cursor_1} alt={""}/>
        </div>
        <div >
          <img className={"cursor_2"} src={cursor_2} alt={""}/>
        </div>

        <div>
          <Button primary className={"playground-button"} title={"Try Playground"} external={true} url={"https://playground.meshery.io"} />
        </div>
        {/*</div>*/}
      </Container>
    </WhiteboardWrapper>
  );
};

export default Whiteboard;