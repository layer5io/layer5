import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import {Col, Container, Row} from "../../../reusecore/Layout";
import QuoteCard from "../../../components/QuoteCard";

const MesheryQuotesWrapper = styled.div`
    margin-top: 2rem;
    margin-bottom: 6rem;
    h2{
      margin: 0 auto 4rem auto;
      max-width: 40%;
      font-weight: 700;
    }
    
    .slick-track
{
    display: flex !important;
}

.slick-slide
{
    height: inherit !important;
}

`;


const MesheryQuotes = () => {
    const settings = {
        dots: false ,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear"
    };

    return(
        <MesheryQuotesWrapper>
            <Container>
                <h2>Hear what Mehsery users (and lovers) have to say</h2>
                <Slider {...settings}>
                    <QuoteCard name="1" position="POSITION" quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                    <QuoteCard name="2" position="POSITION" quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"/>
                    <QuoteCard name="3" position="POSITION" quote="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."/>
                    <QuoteCard name="4" position="POSITION" quote="Amet minim mollit non deserunt ullamco est sit ali"/>
                </Slider>
            </Container>
        </MesheryQuotesWrapper>
    );
};

export default MesheryQuotes;

