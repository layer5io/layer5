import React from "react";
import styled from "styled-components";
import Wasm from "../../assets/images/webassembly/webssembly_icon.svg";
import Patterns from "../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import Ebpf from "../../assets/images/meshmap/ebpf.svg";
import Opa from "../../assets/images/meshmap/opa.svg";
import { Container } from "../../reusecore/Layout";

const CatalogWrapper = styled.div`
  margin: 1rem 0;
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  @media (max-width: 468px) {
    margin: 3rem 0;
  }

  .catalog-container {
    padding: 0;
  }

  .patterns {
    display: flex;
    padding: 1rem 0;
    @media (max-width: 468px) {
      flex-direction: column;
    }
  }

  .text {
    flex: 1;
    padding: 0 3rem 1rem 0;
    width: 100%;

    @media (max-width: 1200px) {
      padding: 0 2.5rem 1rem 0;
    }

    @media (max-width: 992px) {
      padding: 0 1.5rem 1rem 0;
    }

    @media (max-width: 468px) {
      padding: 0.5rem;
    }
  }

  p.caption {
    font-style: normal;
    font-family: "Qanelas Soft", "Qanelas Soft", sans-serif;
    font-weight: 300;
    color: ${(props) => props.theme.whiteToBlack};
    font-size: 1.5rem;
    line-height: 2.125rem;
    text-align: right;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    @media (max-width: 992px) {
      font-size: 1.275rem;
    }

    @media (max-width: 680px) {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    @media (max-width: 468px) {
      text-align: center;
    }
  }
  .toCatalog {
    background: ${(props) => props.theme.grey121212ToLinear};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .svg-cont {
    display: grid;
    place-items: center;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
    padding: 0.5em;
    .opa-card {
    margin-top: -10px;
  }
    img {
      max-width: 5.6rem;
      display: block;
      margin: 0 auto;
    }
    p {
      text-align: center;
      margin-top: 5rem;
      margin-bottom: 0;
      font-weight: 600;
    }
    div {
      text-align: center;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 7px;
      align-items: center;
    }

    @media (max-width: 468px) {
      max-height: 300px;
    }
  }

  h2 {
    display: table;
    margin: 5% auto 1%;
  }
  h2.heading {
    font-family: "Qanelas Soft", "Qanelas Soft", sans-serif;
    font-style: normal;
    font-weight: 50;
    font-size: 3.75rem;
    text-align: right;
    margin: 2rem 0 4rem;

    @media (max-width: 1200px) {
      font-size: 3.25rem;
    }

    @media (max-width: 1050px) {
      font-size: 3rem;
    }
    @media (max-width: 992px) {
      font-size: 2.5rem;
    }
    @media (max-width: 768px) {
      font-size: 2.375rem;
    }
    @media (max-width: 680px) {
      font-size: 2rem;
    }
    @media (max-width: 468px) {
      text-align: center;
    }
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

  .services {
    flex: 1;
    width: 100%;
  }

  @media screen and (max-width: 680px) {
    .svg-cont {
      img {
        width: 4rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.2;
        text-align: center;
      }
    }
  }

  .circlecont {
    width: 110px;
    height: 110px;
    position: relative;
    margin: 1rem auto 35px auto;
  }

  .circle {
    padding-left: 0.5rem;
    width: 110px;
    height: 110px;
    position: absolute;
    border-radius: 110px;
    opacity: 1;
  }

  .hover-circles .circle {
    opacity: 0.2;
    position: absolute;
    top: 0;
    background-blend-mode: multiply;
  }

  .circlecont .hover-circles .circle {
    transform: translate(0px, 0px);
    animation-fill-mode: forwards;
  }

  .feature-container:hover .description {
    opacity: 1;
  }

  .box:hover .hover-circles .circle {
    &:first-child {
      animation: 1.8s circle-1 ease-in-out infinite;
    }
    &:nth-child(2) {
      animation: 2.5s circle-2 ease-in-out infinite;
    }
    &:nth-child(3) {
      animation: 2.7s circle-3 ease-in-out infinite;
    }
    &:nth-child(4) {
      animation: 2.4s circle-4 ease-in-out infinite;
    }
    &:nth-child(5) {
      animation: 3.2s circle-5 ease-in-out infinite;
    }
  }

  @keyframes circle-1 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(15px, 15px);
    }
  }

  @keyframes circle-2 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(10px, -15px);
    }
  }

  @keyframes circle-3 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(-5px, -25px);
    }
  }

  @keyframes circle-4 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(-15px, 20px);
    }
  }

  @keyframes circle-5 {
    0% {
      transform: translate(0px, 0px);
    }

    50% {
      transform: translate(15px, 20px);
    }
  }
`;

const Catalog = () => {
  return (
    <CatalogWrapper>
      <Container className="catalog-container">
        <div className="patterns">
          {/* Left Section */}
          <div className="text">
            <h2 className="heading">Save time with design patterns</h2>
            <p className="caption">
              Turbo-charge your infrastructure with power-ups from the{" "}
              <b>
                <a className="toCatalog" href="https://meshery.io/catalog">
                  cloud native catalog
                </a>
              </b>
            </p>
          </div>
          <div className="vertical-line"></div>
          {/* Right Section */}
          <section className="services svg-cont">
            <div>
              <div className="box">
                <div className="circlecont">
                  <div className="circle"></div>
                  <div className="hover-circles">
                    <div className="circle">
                      <img src={Patterns} />
                    </div>
                    <div className="circle">
                      <img src={Patterns} />
                    </div>
                    <div className="circle">
                      <img src={Patterns} />
                    </div>
                    <div className="circle">
                      <img src={Patterns} />
                    </div>
                    <div className="circle">
                      <img src={Patterns} />
                    </div>
                  </div>
                </div>
              </div>
              <p>Cloud Native Patterns</p>
            </div>
            <div>
              <div className="box">
                <div className="circlecont">
                  <div className="circle"></div>
                  <div className="hover-circles">
                    <div className="circle">
                      <img src={Ebpf} />
                    </div>
                    <div className="circle">
                      <img src={Ebpf} />
                    </div>
                    <div className="circle">
                      <img src={Ebpf} />
                    </div>
                    <div className="circle">
                      <img src={Ebpf} />
                    </div>
                    <div className="circle">
                      <img src={Ebpf} />
                    </div>
                  </div>
                </div>
              </div>

              <p className="ebpf-text">eBPF Programs</p>
            </div>
            <div>
              <div className="box">
                <div className="circlecont">
                  <div className="circle"></div>
                  <div className="hover-circles">
                    <div className="circle">
                      <img src={Wasm} />
                    </div>
                    <div className="circle">
                      <img src={Wasm} />
                    </div>
                    <div className="circle">
                      <img src={Wasm} />
                    </div>
                    <div className="circle">
                      <img src={Wasm} />
                    </div>
                    <div className="circle">
                      <img src={Wasm} />
                    </div>
                  </div>
                </div>
                <p>WASM Filters</p>
              </div>
            </div>
            <div className="opa-card">
              <div className="box">
                <div className="circlecont">
                  <div className="circle"></div>
                  <div className="hover-circles">
                    <div className="circle">
                      <img src={Opa} />
                    </div>
                    <div className="circle">
                      <img src={Opa} />
                    </div>
                    <div className="circle">
                      <img src={Opa} />
                    </div>
                    <div className="circle">
                      <img src={Opa} />
                    </div>
                    <div className="circle">
                      <img src={Opa} />
                    </div>
                  </div>
                </div>
              </div>
              <p>OPA Policies</p>
            </div>
          </section>
        </div>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;
