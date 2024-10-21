import React from "react";
import SeeYouWrapper from "./seeYou.style";
import { Container } from "../../reusecore/Layout";
import square from "../../assets/images/whiteboard/square.svg";
import pentagon from "../../assets/images/whiteboard/pentagon.svg";
import hexagon from "../../assets/images/whiteboard/hexagon.svg";
import octagon from "../../assets/images/whiteboard/octagon.svg";
import cursor_1 from "../../assets/images/whiteboard/cursor-1.svg";
import cursor_2 from "../../assets/images/whiteboard/cursor-2.svg";
import Button from "../../reusecore/Button";

const SeeYou = () => {
  return (
    <SeeYouWrapper>
      <Container className={"see-you"} id={"see-you-canvas"}>
        <div className={"headings"}>
          <span className={"use-heading"}><h2>See you in <span className={"highlighted-text"}>Meshery</span></h2></span>
        Take the work out of teamwork.
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
          <Button $primary className={"playground-button"} title={"Try Playground"} $external={true} $url={"https://playground.meshery.io"} />
        </div>
        {/*</div>*/}
      </Container>
    </SeeYouWrapper>
  );
};

export default SeeYou;