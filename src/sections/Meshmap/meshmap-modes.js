import React from "react";
import styled from "styled-components";
import designerImage from "../../assets/images/meshmap/meshmap-designer.png";
import visualizerImage from "../../assets/images/meshmap/MeshMap-Visualizer.png";
import catalog from "../../assets/images/meshmap/meshmap-catalog.png";


const MeshmapModesWrapper = styled.div`

  .heading{
      text-align: center;
      padding: 1rem 0;
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
    height: 50vh;
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
      cursor: pointer;
  
      &:after {
        opacity: 0;
      }
  
      &:before {
        opacity: 1;
        transform: translate3d(0, 0, 0) translateY(0);
        transition: opacity 1.5s ease, transform 1.5s ease 0.75s;
      }

      .mode-name{
          top: 15%;
          transition: all 1.5s ease 0.75s;
      }
  
      .content {
        opacity: 1;
        transform: translateY(0);
        transition: all 1.5s ease 0.75s;
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
      color: ${props => props.theme.primaryLightColor}; 
      font-size: 1.44rem;
      font-weight: normal;
    }
    img{
        width: 30rem;
        height: auto;
    }
  }
    
    
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

`;

const MeshmapModes = () => {
  return (
    <MeshmapModesWrapper>
      <h2 className="heading">Choose your mode</h2>
      <section className="modes-wrapper">
        <div className="mode">
          <div className="mode-name">
            <p>Designer</p>
          </div>
          <div className="content">
            <h1>World Class Visual Editor</h1>
            <img src={designerImage} alt="MeshMap Designer" />
            <p>
              Build your cloud native infrastructure with custom components and  drag-and-drop controls. Customize a service mesh deployment with application and Envoy filter from scratch.
            </p>
          </div>
        </div>

        <div className="mode">
          <div className="mode-name">
            <p>Visualizer</p>
          </div>
          <div className="content">
            <h1>Deploy your cloud native infrastructure</h1>
            <img src={visualizerImage} alt="MeshMap Visualizer" />
            <p>
              Patterns created in Designer can be deployed and viewed as running in your environment using Visualizer. Examine a visual topology of Kubernetes cluster and its services. Connect an interactive terminal to instances of your containers.
            </p>
          </div>
        </div>
      </section>

    </MeshmapModesWrapper>
  );
};

export default MeshmapModes;

