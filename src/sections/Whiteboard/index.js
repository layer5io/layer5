import React from "react";
import WhiteboardWrapper from "./whiteboard.style";
import { Container } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import whiteboard_svg from "../../assets/images/whiteboard/whiteboard.svg";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import use_case_1 from "../../assets/images/whiteboard/use-case-1.png";
import use_case_2 from "../../assets/images/whiteboard/use-case-2.png";
import use_case_3 from "../../assets/images/whiteboard/use-case-3.png";

let data = {
  heading: "Whiteboarding",
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
    heading: "Text Annotation",
    subtitle: "Text annotations come with various options. Customize fonts, sizes, alignments, and styles easily",
    image: use_case_2
  },
  {
    heading: "Interactive Tooltip Interface",
    subtitle: "The tooltip serves as your gateway to customization, providing a simple and intuitive experience by offering a range of editing options upon selection.",
    image: use_case_3
  },

];

const Whiteboard = () => {
  return (
    <WhiteboardWrapper>
      <FeatureHero data={data}/>
      <Partners />

      <Container>
        <div className={"feature-use-container"}>
          <SectionTitle className={"use-heading"}>
            <h2> Use whiteboarding for <span className={"highlighted-text"}>collaboration</span> </h2>
          </SectionTitle>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4}/>
            ))}
          </div>
        </div>
      </Container>
      <SeeYou/>
    </WhiteboardWrapper>
  );
};

export default Whiteboard;