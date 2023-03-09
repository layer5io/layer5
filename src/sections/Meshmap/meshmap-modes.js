import React, { useState } from "react";
import styled from "styled-components";
import designerImage from "../../assets/images/meshmap/MeshmapDesigner.png";
import visualizerImage from "../../assets/images/meshmap/MeshmapVisualizer.png";

const MeshmapModesWrapper = styled.div`
  margin-top: 0.1rem;

  p.caption {
    margin: 0rem 0rem 2rem 0rem;
    font-style: normal ;
  }
  .firstheading {
    text-align: center;
    padding-top:0;
    margin-top:0;
    background-color: black;
  }
  .heading{
      text-align: center;
      padding: 1rem 0;
      text-transform: uppercase;
  }

  .modes-wrapper {
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
    display: flex;

    background-color: ${props => props.theme.secondaryColor};
    background: linear-gradient(360deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);

    &:hover {
      .mode {
        width: 23.3333%;
      }
    }
  }

  .mode {
    transform: translate3d(0, 0, 0);
    position: relative;
    border-left: 1.5px solid #fff;
    width: 50%;
    height: 40rem;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.5s ease;

    &:first-of-type {border-left: 0px;}
    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:after {
      background: transparentize(#e0251b, 0.15);
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        #00b39f 100%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 80% !important;
      cursor: default;

      &:after {
        opacity: 0;
      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 0.5s ease, transform 0.5s ease 0.5s;
      }

      .mode-name{
          top: 15%;
          transition: all 0.5s ease 0.5s;
      }

      .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.75s ease 0.5s;
      }
    }
  }

  .mode-catalog {
    transform: translate3d(0, 0, 0);
    position: relative;
    border-top: 1.5px solid #fff;
    width: 100%;
    height: 50vh;
    min-height: 600px;
    color: #fff;
    overflow: hidden;
    transition: width 0.3s ease;

    &:first-of-type {border-left: 0px;}
    &:before,
    &:after {
      transform: translate3d(0, 0, 0);
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &:after {
      opacity: 1;
      transition: opacity 0.5s ease;
    }

    &:before {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        #00b39f 100%
      );
      z-index: 1;
      opacity: 0;
      transform: translate3d(0, 0, 0) translateY(50%);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    &:hover {
      width: 100% !important;
      cursor: default;

      &:after {
        opacity: 0;
        transition: opacity 0.5s ease, transform 0.5s ease;

      }

      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1s ease, transform 1s ease 0.5s;
      }

      .mode-name{
          top: 15%;
          transition: all 1.1s ease 0.55s;
      }

      .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 1.1s ease 0.55s;
      }
    }
  }

  .content {
    transform: translate3d(0, 0, 0) translateY(95px);
    position: relative;
    z-index: 1;
    text-align: center;
    margin: 0 1.618em;
    top: 23%;
    opacity: 0;

    h1 {
      margin: 0.5rem;
      text-transform: uppercase;
      color: ${props => props.theme.saffronColor};
      font-size: 1.44rem;
      font-weight: normal;
    }
    img{
        width: 30rem;
        height: auto;
        cursor: pointer;
    }
    .designer-img {
      box-shadow: 0px 0.25rem 0.5rem 0rem rgb(0, 0, 0, 0.75);
      margin: 1rem auto;
      border-radius: 0.35rem;

      @media only screen and (max-width: 992px) {
        width: 90%;
      }
    }
  }

  .flip {
    background: linear-gradient(180deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);
  }

  .mode-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;

    p {
      font-size: 1.728rem;
      line-height: 2;
      margin-bottom: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  .big{
    transform: scale(1.9);
    transition: transform 0.25s ease;
    @media only screen and (max-width: 1198px) {
      transform: scale(1.1);
    }
  }
  .small{
    transform: scale(1);
    transition: transform 0.25s ease;
  }

`;

const MeshmapModes = () => {
  const [designerEnlarged, setDesignerEnlarged] = useState(false);
  const [vizEnlarged, setVizEnlarged] = useState(false);

  return (
    <MeshmapModesWrapper>
      {/* <h1 className="heading">Choose Your Mode</h1> */}
      {/* <p className="caption"> */}
      {/* Discover and Visualize - any and all of your cloud native infra and apps. */}
      {/* Collaboratively design and manage your Kubernetes clusters, service mesh deployments, and cloud native apps. */}
      {/* </p> */}
      {/* MeshMap supports 10+ service meshes. */}
      <section className="modes-wrapper">
        <div className="mode">
          <div className="mode-name">
            <p>Designer</p>
          </div>
          <div className="content">
            <h1>Discover and model your cloud native deployments</h1>
            <img src={designerImage} alt="MeshMap Designer" onClick={() => setDesignerEnlarged(!designerEnlarged)} className={`designer-img ${designerEnlarged ? "big" : "small"}`} />
            <p>
              Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components. Using GitOps? Integrate advanced performance analysis into your pipeline.
            </p>
          </div>
        </div>

        <div className="mode">
          <div className="mode-name">
            <p>Visualizer</p>
          </div>
          <div className="content">
            <h1>Apply patterns and manage many Kubernetes clusters</h1>
            <img src={visualizerImage} alt="MeshMap Visualizer" onClick={() => setVizEnlarged(!vizEnlarged)} className={vizEnlarged ? "big" : "small"} />
            <p>
              Deploy designs, apply patterns, manage and operate your deployments in real-time. Bring all your Kubernetes clusters under a common point of management. Interactively connect to terminal sessions or initiate and search log streams from your containers.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="modes-wrapper flip">
        <div className="mode-catalog">
          <div className="mode-name">
            <p>Catalog</p>
          </div>
          <div className="content">
            <h1>Deploy your cloud native infrastructure</h1>
            <img src={catalog} alt="Catalog" />
            <p>Create and share your own Kubernetes deployments and <Link to="/learn/service-mesh-books/service-mesh-patterns">service mesh patterns</Link> in MeshMap Designer or import from the catalog. </p>
          </div>
        </div>
      </section> */}
    </MeshmapModesWrapper>
  );
};

export default MeshmapModes;

