import React from "react";
import { Container } from "../../reusecore/Layout";
import comments_svg from "../../assets/images/comments/comment.svg";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import FeatureHero from "../FeatureHero";
import FeatureUseCard from "../../components/FeatureUseCard";
import CommentsWrapper from "./comments.style";
import use_case_1 from "../../assets/images/comments/use-case-1.png";
import use_case_2 from "../../assets/images/comments/use-case-2.png";
import use_case_3 from "../../assets/images/comments/use-case-3.png";

let data = {
  heading: "Brainstorm with Comments",
  sub_heading: "Use comments for effective design reviews and real-time collaboration",
  image: comments_svg
};

let card_data = [
  {
    heading: "Dynamic collaboration",
    subtitle: "Bring your ideas to life by adding visual annotations and comments directly onto your Kanvas canvas.",
    image: use_case_1
  },
  {
    heading: "Seamless communication",
    subtitle: "Keep the conversation flowing with instant updates and notifications, ensuring everyone stays in the loop.",
    image: use_case_2
  },
  {
    heading: "Track discussion with comment history",
    subtitle: "Revisit and relive your digital conversations effortlessly with Comment History. Explore the evolution of your discussions, track key moments, and gain valuable insights",
    image: use_case_3
  },

];

const Comments = () => {
  return (
    <CommentsWrapper>
      <FeatureHero data={data} />
      <Container>
        <div className={"feature-use-container"}>
          <div>
            <h2 className={"use-heading"}> Use <span className={"highlighted-text"}>comments</span> to streamline design reviews </h2>
          </div>
          <div className={"collaboration_display"}>
            {card_data.map((x) => (
              <FeatureUseCard data={x} key={x.heading} $sm={12} $md={6} $lg={4} />
            ))}
          </div>
        </div>
      </Container>
      <Partners />
      <SeeYou />


    </CommentsWrapper>
  );
};

export default Comments;