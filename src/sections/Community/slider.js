import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { withPrefix } from "gatsby";

const PictureSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .slick-slider {
    margin-top: 1rem;
    height: 100%;
    width: 100%;

    .slick-list {
      width: 100%;
    }
    @media (max-width: 36rem) {
      margin: 5rem auto;
      max-width: 18.75rem;
    }
  }

  .slick-track {
    display: flex;

    .slick-slide {
      display: flex;
      height: auto;
      align-items: center;
      justify-content: center;
    }
  }
`;

const IMAGES = [
  { src: "/images/community/abishek-kumar.webp", alt: "Abishek Kumar" },
  { src: "/images/community/aisuko-li.webp", alt: "Aisuko Li" },
  { src: "/images/community/anirudh-jain.webp", alt: "Anirudh Jain" },
  { src: "/images/community/augustine-ogiza.webp", alt: "Augustine Ogiza" },
  {
    src: "/images/community/community-handbook.webp",
    alt: "Community handbook",
  },
  { src: "/images/community/community.webp", alt: "Layer5 community" },
  {
    src: "/images/community/derek-weeks-and-lee-at-book-signing-at-all-things-open.webp",
    alt: "Derek Weeks and Lee at book signing at All Things Open",
  },
  {
    src: "/images/community/ed-warnicke-network-service-mesh.webp",
    alt: "Ed Warnicke network service mesh",
  },
  {
    src: "/images/community/first-meeting-with-ishita-kumar-2020-06-11-at-3-37-52-pm.webp",
    alt: "First meeting with Ishita Kumar",
  },
  {
    src: "/images/community/five-finding-issue.webp",
    alt: "Five finding an issue",
  },
  { src: "/images/community/five.webp", alt: "Five" },
  { src: "/images/community/five-working.webp", alt: "Five working" },
  { src: "/images/community/gsoc-shirt.webp", alt: "GSoC shirt" },
  { src: "/images/community/img-6521.jpeg", alt: "Community photo 6521" },
  { src: "/images/community/img-6936.jpeg", alt: "Community photo 6936" },
  {
    src: "/images/community/istio-up-and-running-framed.webp",
    alt: "Istio Up and Running framed",
  },
  { src: "/images/community/jash-patel.webp", alt: "Jash Patel" },
  {
    src: "/images/community/join-the-community.png",
    alt: "Join the community",
  },
  {
    src: "/images/community/lee-calcote-and-oliver-gould-cto-of-buoyant.webp",
    alt: "Lee Calcote and Oliver Gould",
  },
  {
    src: "/images/community/lee-calcote-and-zack-butcher.jpeg",
    alt: "Lee Calcote and Zack Butcher",
  },
  {
    src: "/images/community/michael-gfeller.webp",
    alt: "Michael Gfeller",
  },
  {
    src: "/images/community/navendu-pottekkat.webp",
    alt: "Navendu Pottekkat",
  },
  {
    src: "/images/community/nikhil-ladha-meshmate-of-the-year.webp",
    alt: "Nikhil Ladha MeshMate of the Year",
  },
  {
    src: "/images/community/rodolfo-martinez-vega.webp",
    alt: "Rodolfo Martinez Vega",
  },
  {
    src: "/images/community/shriti-chandra.webp",
    alt: "Shriti Chandra",
  },
  {
    src: "/images/community/utkarsh-srivasta.webp",
    alt: "Utkarsh Srivasta",
  },
  {
    src: "/images/community/yogi-porla-showing-layer5-partnership-at-hpe-discover.webp",
    alt: "Yogi Porla showing Layer5 partnership at HPE Discover",
  },
  {
    src: "/images/community/layer5-mentor-program.webp",
    alt: "Layer5 mentor program",
  },
  {
    src: "/images/community/lee-workshop.webp",
    alt: "Lee workshop",
  },
];

const PictureSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <PictureSliderWrapper>
      <Slider {...settings}>
        {IMAGES.map((image, id) => (
          <img key={id} src={withPrefix(image.src)} alt={image.alt} />
        ))}
      </Slider>
    </PictureSliderWrapper>
  );
};

export default PictureSlider;
