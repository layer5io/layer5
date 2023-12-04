import React from "react";
import { Container } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import comments_svg from "../../assets/images/comments/comment.svg";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import CommentsWrapper from "./comments.style";

let data = {
  heading: "Brainstorm with Comments",
  sub_heading: "Use comments for effective design reviews and real-time collaboration",
  image: comments_svg
};

let card_data = [
  {
    heading: "Dynamic collaboration",
    subtitle: "Bring your ideas to life by adding visual annotations and comments directly onto your MeshMap canvas.",
    image: ""
  },
  {
    heading: "Seamless communication",
    subtitle: "Keep the conversation flowing with instant updates and notifications, ensuring everyone stays in the loop.",
    image: ""
  },
  {
    heading: "Effortless iteration",
    subtitle: "Use our pre-built components like device frames, icons and UI elements to quickly draw wireframes.\n" +
      "Use templates to get a head start",
    image: ""
  },

];

const Comments = () => {
  return (
    <CommentsWrapper>
      <FeatureHero data={data}/>
      <Partners />

      <Container>
        <div className={"feature-use-container"}>
          <SectionTitle className={"use-heading"}>
            <h2> Use <span className={"highlighted-text"}>comments</span> to streamline design reviews </h2>
          </SectionTitle>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} sm={12} md={6} lg={4}/>
            ))}
          </div>
        </div>
      </Container>
      <SeeYou/>
    </CommentsWrapper>
  );
};

export default Comments;