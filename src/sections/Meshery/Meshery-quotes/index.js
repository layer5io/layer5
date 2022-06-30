import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Container } from "../../../reusecore/Layout";
import QuoteCard from "../../../components/QuoteCard";

const MesheryQuotesWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 6rem;
    h2{
      margin: 0 auto 4rem auto;
      max-width: 40%;
      font-weight: 700;
    }
`;

const quotes_data = [
  {
    name : "Yogi Porla",
    position : "Principal Engineer, HPE",
    quote : "Meshery helps us curate Service Mesh for tailored need by helping us running simulations and identifying the right fit Service Mesh that works efficiently across diverse ecosystem of tools."
  },
  {
    name : "Jason S.",
    position : "Site Reliability Engineer",
    quote : "Huge fan of MeshMap. It doesn't get any more intuitive than this."
  },
  {
    name : "Shane W.",
    position : "DevOps Architect",
    quote : "...the ability to benchmark Istio in MY cluster with MY workloads is just what I was looking for. I threw out my test scripts."
  },
];


const MesheryQuotes = () => {
  const settings = {
    dots : false,
    infinite : true,
    slidesToShow : 2,
    slidesToScroll : 1,
    autoplay : true,
    speed : 8000,
    autoplaySpeed : 2000,
    pauseOnHover : true,
    cssEase : "linear",
    responsive : [
      {
        breakpoint : 768,
        settings : {
          slidesToShow : 1,
          slidesToScroll : 1,
        }
      },
    ]
  };
  return (
    <MesheryQuotesWrapper>
      <Container>
        {/*
         Enable after go-live
         */}
        {/* <h2>Meshery Users Get Mushy</h2>
        <Slider {...settings}>
          {quotes_data.map((data,index) => (
            <QuoteCard
              key={`${data.name}${index}`}
              name={data.name}
              position={data.position}
              quote={data.quote}
            />
          ))}
        </Slider> */}
      </Container>
    </MesheryQuotesWrapper>
  );
};

export default MesheryQuotes;

