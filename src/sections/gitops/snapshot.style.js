import styled from "styled-components";
import { Row, Col } from "../../reusecore/Layout";


export const SnapshotWrapper = styled.section`
    position: relative;
    z-index: 1;
    font-size: 12px;

    .gradient-wrapper {
        background: linear-gradient(245.08deg, rgba(0, 0, 0, 0.06) 49.26%, rgba(0, 211, 169, 0.5) 100%);
        width: 100%;
        height: 50rem;
        position: absolute;

        @media only screen and (min-width: 768px) {
          height: 65rem;
        }

        @media only screen and (min-width: 1024px) {
          height: 78rem;
        }
    }

    .reviews-container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (min-width: 768px) {
        font-size: 16px;
    }
`;

export const ContentContainerWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: block;
    padding-bottom: 4rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    @media only screen and (min-width: 1024px) {
        padding-left: 6rem;
        padding-right: 6rem;
        padding-bottom: 13rem;
    }
`;

export const HeroContentContainerWrapper = styled(ContentContainerWrapper)`
    padding-top: 0rem;

    @media only screen and (min-width: 460px) {
          padding-top: 8rem;
    }
`;


export const ContentRowWrapper = styled(Row)`
        display: flex;
        align-items: center;
        justify-content: space-between;

        .desc-text-container {
            padding: 1.5rem;
 
            .learn-more-btn{
                color:white;
                font-weight: 800;
                font-size: 1.5em;
            }
        }
`;


export const Heading = styled.h1`
    font-weight: 600;
    font-size: 3.125em;
`;


export const Description = styled.p`
    font-size: 1.25em;
    font-weight: 400;
    margin: 0.5rem 0 0.5rem 0;

    @media screen and (min-width: 640px) {
        margin: 1.875rem 0 2.5rem 0;
     }
`;

export const ColumnWrapper = styled(Col)`
        display:flex;
        align-items: center;
        justify-content: center;
        position: relative;


        .meshmap-stack-hero {
            position: absolute;
            height: 150px;
            animation: "floating 3s ease-in-out infinite";

            @media screen and (min-width: 768px) {
                height: 200px; 
            }
        }

        .meshmap-stack-cone{
            height: 300px;

             @media screen and (min-width: 768px) {
                height: 400px; 
            }
        }

        .screenshot {
            height:200px;

            @media screen and (min-width: 768px) {
                width: 530px; 
                height: 375px;
            }

        }
`;

