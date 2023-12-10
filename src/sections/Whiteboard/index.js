import React from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Container } from "../../reusecore/Layout";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.png";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import use_case_1 from "../../assets/images/whiteboard/use-case-1.png";
import use_case_2 from "../../assets/images/whiteboard/use-case-2.png";
import use_case_3 from "../../assets/images/whiteboard/use-case-3.png";

let data = {
  heading: "Beautify your infra with Whiteboarding",
  sub_heading: "All-in-one markdown editor, collaborative canvas, and diagram-as-code builder",
  image: whiteboard_svg
};

let card_data = [
  {
    heading: "Collection of shapes",
    subtitle: "Select from a variety of available shapes to suit your preferences and needs.",
    image: use_case_1
  },
  {
    heading: "Add notes for colleagues",
    subtitle: "Text annotations come with various options. Customize fonts, sizes, alignments, and styles easily",
    image: use_case_2
  },
  {
    heading: "Direct customization from canvas",
    subtitle: "The tooltip serves as your gateway to customization, providing a simple and intuitive experience by offering a range of editing options upon selection.",
    image: use_case_3
  },

];

const Whiteboard = () => {
  return (
    <WhiteboardWrapper>
      <FeatureHero data={data} />

      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}> Use whiteboarding for <span className={"highlighted-text"}>collaboration</span> </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4} />
            ))}
          </div>
        </div>
      </Container>
      <Partners />
      <SeeYou />
    </WhiteboardWrapper>
  );
};

export default Whiteboard;