import React from "react";
import MeshFocusWrapper from "./service-mesh-focussed.style";
import ServiceMeshFocusedImage from "./The-Enterprise-Path-to-Service-Mesh-Architectures.png";
import BlockQouteImage from "../../../assets/images/blockqoute/quote-left.svg";
import Button from "../../../reusecore/Button";
import {FaArrowRight} from "react-icons/fa";

const ServiceMeshFocused = () => {

  return (
    <MeshFocusWrapper>
      <div className="main-cont">
        <div className="head-cont-2">
          <h5>Open Source</h5>
          <h1>Service mesh focused.</h1>
          <h1>Service mesh neutral.</h1>
          <h5>The only vendor dedicated to empowering organisations with any service mesh.</h5>
        </div>
        <div className="card-cont-1">
          <div className="img-col">
            <img src={ServiceMeshFocusedImage} alt="The-Enterprise-Path-to-Service-Mesh-Architectures" />
          </div>
          <div className="content-col">
            <img src={BlockQouteImage} alt="Quote-left"/>
            <p className="content">
              <strong>
              "Diverse Microservices patterns and technologies, together with the requirements of given microservice applications,provide myriad opportunities
              for service mesh differentiation and specialization - including meshes native to specific cloud platforms. This will lead to a world where many
              enterprises use multiple service mesh products, whether separately or together."
              </strong>
            </p>
            <Button url="/books/the-enterprise-path-to-service-mesh-architectures">
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
