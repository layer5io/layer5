
import React from "react";
import MeshFocusWrapper from "./service-mesh-focussed";
//import { Row, Col } from "../../../reusecore/Layout";
import BlockQouteImage from "../../../assets/images/blockqoute/quote-left.svg";
import Button from "../../../reusecore/Button/index";
import {FaArrowRight} from "react-icons/fa";
const ServiceMeshFocused = () => {

  return (
    <MeshFocusWrapper>
      <div className="main-cont">
        <div className="head-cont-2">
          <h5>Open Source</h5>  
          <h1 >
            <span>Service mesh focused.</span>
            <span>Service mesh neutral.</span>
          </h1>
          <h5>The only vendor dedicated to empowering organisations with any service mesh.</h5>
        </div>
        <div className="card-cont-1">
          <div className="img-col">
            <img src="/static/f43f94862a4505b9c575e0cf0c5184ae/The-Enterprise-Path-to-Service-Mesh-Architectures.png" alt="The-Enterprise-Path-to-Service-Mesh-Architectures" />
          </div>
          <div className="content-col">
            <img src={BlockQouteImage} alt="Qoute-left"/>
            <p className="content">
              <strong>
              "Diverse Microservices patterns and technologies, together with the requirements of given microservice applications,provide myriad opportunities 
              for service mesh differentiation and specialization - including meshes native to specific cloud platforms. This will lead to a world where many 
              enterprises use multiple service mesh products, whether separately or together."
              </strong>
            </p>
            <Button>
              Read Story
              <FaArrowRight className="icon-right"/>
            </Button>
            
          </div>
          
        </div>
      </div>        
    </MeshFocusWrapper>
  );
};


export default ServiceMeshFocused;
