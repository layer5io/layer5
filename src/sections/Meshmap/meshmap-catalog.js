import React from "react";
import styled from "styled-components";

import Mutual_tls from "../../assets/images/meshmap/catalog-card-images/mutual-tls.svg";
import Retries from "../../assets/images/meshmap/catalog-card-images/retries.svg";
import Traces from "../../assets/images/meshmap/catalog-card-images/traces.svg";
import Denial from "../../assets/images/meshmap/catalog-card-images/denial.svg";
import Correlate_event from "../../assets/images/meshmap/catalog-card-images/correlate-event.svg";
import Only_wagent from "../../assets/images/meshmap/catalog-card-images/only-wagent.svg";
import Node_agent from "../../assets/images/meshmap/catalog-card-images/node-agent.svg";
import Single_tenant from "../../assets/images/meshmap/catalog-card-images/single-tenant.svg";
import Pre_provison from "../../assets/images/meshmap/catalog-card-images/pre-provision.svg";
import Circuit_breaker from "../../assets/images/meshmap/catalog-card-images/circuit-breaker.svg";
import Retry_deadline from "../../assets/images/meshmap/catalog-card-images/retry-deadline.svg";
import Singleton from "../../assets/images/meshmap/catalog-card-images/singleton.svg";
import Jwt_transformer from "../../assets/images/meshmap/catalog-card-images/jwt.svg";
import Multicluster from "../../assets/images/meshmap/catalog-card-images/multicluster.svg";
import Http_metrics from "../../assets/images/meshmap/catalog-card-images/http.svg";


import Options from "../../assets/images/meshmap/options.png";
import { Container } from "../../reusecore/Layout";

const CatalogWrapper = styled.div`

margin: 6rem 0 9rem;
h2{
	display: table;
	margin: 5% auto 1%;
}
h2.heading {
  text-transform: uppercase ;
}
.container{
	margin: 4rem auto;
	width: 120px;
	height: 150px;
	position: relative;
	perspective: 1000px;
}
#carousel{
	width: 100%;
	height: 100%;
	position: absolute;
	transform-style: preserve-3d;
	animation: swirl 40s steps(10000, end) infinite; 
}
#carousel:hover{
	animation-play-state: paused;
}

#carousel{
img{
	cursor: pointer;
	transition: all .5s ease;
}
img:hover{
  transform: scale(1.1,1.1);
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
  return (
    <CatalogWrapper>
      <Container>
        <h2 className="heading">Choose Your Power-ups</h2>
        <img src={Options} alt="" />

        <div className="container">
          <div id="carousel">
            <div className="slide one">
              <img src={Mutual_tls} />
            </div>
            <div className="slide two">
              <img src={Retries} />
            </div>
            <div className="slide three">
              <img src={Traces} />
            </div>
            <div className="slide four">
              <img src={Denial} />
            </div>
            <div className="slide five">
              <img src={Correlate_event} />
            </div>
            <div className="slide six">
              <img src={Only_wagent} />
            </div>
            <div className="slide seven">
              <img src={Node_agent} />
            </div>
            <div className="slide eight">
              <img src={Single_tenant} />
            </div>
            <div className="slide nine">
              <img src={Pre_provison} />
            </div>
            <div className="slide ten">
              <img src={Circuit_breaker} />
            </div>
            <div className="slide eleven">
              <img src={Retry_deadline} />
            </div>
            <div className="slide twelve">
              <img src={Singleton} />
            </div>
            <div className="slide thirteen">
              <img src={Jwt_transformer} />
            </div>
            <div className="slide fourteen">
              <img src={Multicluster} />
            </div>
            <div className="slide fifteen">
              <img src={Http_metrics} />
            </div>
          </div>
        </div>
        <p>
          MeshMap not only allows you to create and verify your cloud native application and infrastructure configurations, but also integrates with Meshery's <a href="https://meshery.io/catalog">service mesh catalog</a>.
        </p>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;

