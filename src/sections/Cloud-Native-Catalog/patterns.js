import React from "react";
import styled from "styled-components";
import Mutual_tls from "../../assets/images/kanvas/catalog-card-images/mutual-tls.svg";
import Mutual_tls_dark from "../../assets/images/kanvas/catalog-card-images/mutual-tls-dark.svg";
import Retries from "../../assets/images/kanvas/catalog-card-images/retries.svg";
import Retries_dark from "../../assets/images/kanvas/catalog-card-images/retries-dark.svg";
import Traces from "../../assets/images/kanvas/catalog-card-images/traces.svg";
import Traces_dark from "../../assets/images/kanvas/catalog-card-images/traces-dark.svg";
import Denial from "../../assets/images/kanvas/catalog-card-images/denial.svg";
import Denial_dark from "../../assets/images/kanvas/catalog-card-images/denial-dark.svg";
import Correlate_event from "../../assets/images/kanvas/catalog-card-images/correlate-event.svg";
import Correlate_event_dark from "../../assets/images/kanvas/catalog-card-images/correlate-event-dark.svg";
import Only_wagent from "../../assets/images/kanvas/catalog-card-images/only-wagent.svg";
import Only_wagent_dark from "../../assets/images/kanvas/catalog-card-images/only-wagent-dark.svg";
import Node_agent from "../../assets/images/kanvas/catalog-card-images/node-agent.svg";
import Node_agent_dark from "../../assets/images/kanvas/catalog-card-images/node-agent-dark.svg";
import Single_tenant from "../../assets/images/kanvas/catalog-card-images/single-tenant.svg";
import Single_tenant_dark from "../../assets/images/kanvas/catalog-card-images/single-tenant-dark.svg";
import Pre_provison from "../../assets/images/kanvas/catalog-card-images/pre-provision.svg";
import Pre_provison_dark from "../../assets/images/kanvas/catalog-card-images/pre-provision-dark.svg";
import Circuit_breaker from "../../assets/images/kanvas/catalog-card-images/circuit-breaker.svg";
import Circuit_breaker_dark from "../../assets/images/kanvas/catalog-card-images/circuit-breaker-dark.svg";
import Retry_deadline from "../../assets/images/kanvas/catalog-card-images/retry-deadline.svg";
import Retry_deadline_dark from "../../assets/images/kanvas/catalog-card-images/retry-deadline-dark.svg";
import Singleton from "../../assets/images/kanvas/catalog-card-images/singleton.svg";
import Singleton_dark from "../../assets/images/kanvas/catalog-card-images/singleton-dark.svg";
import Jwt_transformer from "../../assets/images/kanvas/catalog-card-images/jwt.svg";
import Jwt_transformer_dark from "../../assets/images/kanvas/catalog-card-images/jwt-dark.svg";
import Multicluster from "../../assets/images/kanvas/catalog-card-images/multicluster.svg";
import Multicluster_dark from "../../assets/images/kanvas/catalog-card-images/multicluster-dark.svg";
import Http_metrics from "../../assets/images/kanvas/catalog-card-images/http.svg";
import Http_metrics_dark from "../../assets/images/kanvas/catalog-card-images/http-dark.svg";
import { Container } from "../../reusecore/Layout";
import { useStyledDarkMode } from "../../theme/app/useStyledDarkMode";

const CatalogWrapper = styled.div`
  margin: 0;
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;

  .catalog-container {
    padding: 0;
  }

  .catalog-wrapper {
    box-shadow: 0px 6px 5px 0px rgba(0, 0, 0, 0.25);
    padding: 4rem;
    background-color: ${(props) => props.theme.secondaryColor};
    background: linear-gradient(
      180deg,
      hsla(173, 100%, 35%, 1) 7%,
      hsla(0, 0%, 0%, 1) 90%
    );
  }

  h3.containerCaption {
    color: ${(props) => props.theme.saffronColor};
    padding-top: 0.25rem;
    margin-bottom: -0.5rem;
    font-size: 1.44rem;
    font-weight: normal;
    text-align: center;
    span {
      color: ${(props) => props.theme.saffronColor};
    }
  }
  .vertical-line {
    position: relative;
    margin: auto;
    height: 20rem;
    width: 0px;
    border: 1.5px solid ${(props) => props.theme.green00B39FToGreyB3B3B3};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 468px) {
      display: none;
    }
  }

  .container {
    margin: 4rem auto;
    width: 120px;
    height: 150px;
    position: relative;
    perspective: 1000px;
  }

  #carousel {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    animation: swirl 40s steps(10000, end) infinite;
  }

  #carousel:hover {
    animation-play-state: paused;
  }

  #carousel {
    img {
      transition: all 0.5s ease;
    }
  }

  .slide {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .slide.one {
    transform: rotateY(0deg) translateZ(382px);
  }
  .slide.two {
    transform: rotateY(24deg) translateZ(382px);
  }
  .slide.three {
    transform: rotateY(48deg) translateZ(382px);
  }
  .slide.four {
    transform: rotateY(72deg) translateZ(382px);
  }
  .slide.five {
    transform: rotateY(96deg) translateZ(382px);
  }
  .slide.six {
    transform: rotateY(120deg) translateZ(382px);
  }
  .slide.seven {
    transform: rotateY(144deg) translateZ(382px);
  }
  .slide.eight {
    transform: rotateY(168deg) translateZ(382px);
  }
  .slide.nine {
    transform: rotateY(192deg) translateZ(382px);
  }
  .slide.ten {
    transform: rotateY(216deg) translateZ(382px);
  }
  .slide.eleven {
    transform: rotateY(240deg) translateZ(382px);
  }
  .slide.twelve {
    transform: rotateY(264deg) translateZ(382px);
  }
  .slide.thirteen {
    transform: rotateY(288deg) translateZ(382px);
  }
  .slide.fourteen {
    transform: rotateY(312deg) translateZ(382px);
  }
  .slide.fifteen {
    transform: rotateY(336deg) translateZ(382px);
  }

  @media screen and (max-width: 992px) {
    .container {
      width: 90px;
    }
    .slide.one {
      transform: rotateY(0deg) translateZ(260px);
    }
    .slide.two {
      transform: rotateY(24deg) translateZ(260px);
    }
    .slide.three {
      transform: rotateY(48deg) translateZ(260px);
    }
    .slide.four {
      transform: rotateY(72deg) translateZ(260px);
    }
    .slide.five {
      transform: rotateY(96deg) translateZ(260px);
    }
    .slide.six {
      transform: rotateY(120deg) translateZ(260px);
    }
    .slide.seven {
      transform: rotateY(144deg) translateZ(260px);
    }
    .slide.eight {
      transform: rotateY(168deg) translateZ(260px);
    }
    .slide.nine {
      transform: rotateY(192deg) translateZ(260px);
    }
    .slide.ten {
      transform: rotateY(216deg) translateZ(260px);
    }
    .slide.eleven {
      transform: rotateY(240deg) translateZ(260px);
    }
    .slide.twelve {
      transform: rotateY(264deg) translateZ(260px);
    }
    .slide.thirteen {
      transform: rotateY(288deg) translateZ(260px);
    }
    .slide.fourteen {
      transform: rotateY(312deg) translateZ(260px);
    }
    .slide.fifteen {
      transform: rotateY(336deg) translateZ(260px);
    }
  }
  @media screen and (max-width: 680px) {
    .catalog-wrapper {
      padding: 2rem;
    }

    .container {
      width: 65px;
      margin: 1.5rem auto 0rem;
    }
    .slide.one {
      transform: rotateY(0deg) translateZ(160px);
    }
    .slide.two {
      transform: rotateY(24deg) translateZ(160px);
    }
    .slide.three {
      transform: rotateY(48deg) translateZ(160px);
    }
    .slide.four {
      transform: rotateY(72deg) translateZ(160px);
    }
    .slide.five {
      transform: rotateY(96deg) translateZ(160px);
    }
    .slide.six {
      transform: rotateY(120deg) translateZ(160px);
    }
    .slide.seven {
      transform: rotateY(144deg) translateZ(160px);
    }
    .slide.eight {
      transform: rotateY(168deg) translateZ(160px);
    }
    .slide.nine {
      transform: rotateY(192deg) translateZ(160px);
    }
    .slide.ten {
      transform: rotateY(216deg) translateZ(160px);
    }
    .slide.eleven {
      transform: rotateY(240deg) translateZ(160px);
    }
    .slide.twelve {
      transform: rotateY(264deg) translateZ(160px);
    }
    .slide.thirteen {
      transform: rotateY(288deg) translateZ(160px);
    }
    .slide.fourteen {
      transform: rotateY(312deg) translateZ(160px);
    }
    .slide.fifteen {
      transform: rotateY(336deg) translateZ(160px);
    }
  }

  @keyframes swirl {
    from {
      transform: rotateY(-360deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }
`;

const Catalog = () => {
  const { isDark } = useStyledDarkMode();
  return (
    <CatalogWrapper>
      <a href="https://meshery.io/catalog">
        <div className="catalog-wrapper">
          <Container className="catalog-container">
            <div className="container">
              <div id="carousel">
                <div className="slide one">
                  <img src={isDark ? Mutual_tls_dark : Mutual_tls} />
                </div>
                <div className="slide two">
                  <img src={isDark ? Retries_dark : Retries} />
                </div>
                <div className="slide three">
                  <img src={isDark ? Traces_dark : Traces} />
                </div>
                <div className="slide four">
                  <img src={isDark ? Denial_dark : Denial} />
                </div>
                <div className="slide five">
                  <img src={isDark ? Correlate_event_dark : Correlate_event} />
                </div>
                <div className="slide six">
                  <img src={isDark ? Only_wagent_dark : Only_wagent} />
                </div>
                <div className="slide seven">
                  <img src={isDark ? Node_agent_dark : Node_agent} />
                </div>
                <div className="slide eight">
                  <img src={isDark ? Single_tenant_dark : Single_tenant} />
                </div>
                <div className="slide nine">
                  <img src={isDark ? Pre_provison_dark : Pre_provison} />
                </div>
                <div className="slide ten">
                  <img src={isDark ? Circuit_breaker_dark : Circuit_breaker} />
                </div>
                <div className="slide eleven">
                  <img src={isDark ? Retry_deadline_dark : Retry_deadline} />
                </div>
                <div className="slide twelve">
                  <img src={isDark ? Singleton_dark : Singleton} />
                </div>
                <div className="slide thirteen">
                  <img src={isDark ? Jwt_transformer_dark : Jwt_transformer} />
                </div>
                <div className="slide fourteen">
                  <img src={isDark ? Multicluster_dark : Multicluster} />
                </div>
                <div className="slide fifteen">
                  <img src={isDark ? Http_metrics_dark : Http_metrics} />
                </div>
              </div>
            </div>
            <h3 className="containerCaption">
              Discover best practices. Publish design patterns.
            </h3>
          </Container>
        </div>
      </a>
    </CatalogWrapper>
  );
};

export default Catalog;
