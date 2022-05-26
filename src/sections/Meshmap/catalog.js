import React from "react";
import styled from "styled-components";
import Multicluster from "../../assets/images/meshmap/catalog-card-images/multi-cluster.svg";
import Retries from "../../assets/images/meshmap/catalog-card-images/retries.svg";
import Node_agent from "../../assets/images/meshmap/catalog-card-images/node-agent.svg";
import Pre_provision from "../../assets/images/meshmap/catalog-card-images/pre-provision.svg";
import Retry_deadline from "../../assets/images/meshmap/catalog-card-images/retry-deadline.svg";
import Denial from "../../assets/images/meshmap/catalog-card-images/denial.svg";
import Correlate from "../../assets/images/meshmap/catalog-card-images/correlate-event.svg";
import Singleton from "../../assets/images/meshmap/catalog-card-images/singleton-queue.svg";
import Circuit from "../../assets/images/meshmap/catalog-card-images/circuit-breaker.svg";
import Http_metrics from "../../assets/images/meshmap/catalog-card-images/http-metrics.svg";

import Options from "../../assets/images/meshmap/options.png";
import { Container } from "../../reusecore/Layout";

const CatalogWrapper = styled.div`

margin: 6rem 0 9rem;
h2{
	display: table;
	margin: 5% auto 1%;
}
.container{
	margin: 4rem auto;
	width: 210px;
	height: 150px;
	position: relative;
	perspective: 1000px;
}
#carousel{
	width: 100%;
	height: 150%;
	position: absolute;
	transform-style: preserve-3d;
	animation: rotation 30s infinite linear;
}
#carousel:hover{
	animation-play-state: paused;
}
#carousel figure{
	display: block;
	position: absolute;
	overflow: hidden;
}
#carousel figure:nth-child(1){transform: rotateY(0deg) translateZ(300px);}
#carousel figure:nth-child(2) { transform: rotateY(36deg) translateZ(300px);}
#carousel figure:nth-child(3) { transform: rotateY(72deg) translateZ(300px);}
#carousel figure:nth-child(4) { transform: rotateY(108deg) translateZ(300px);}
#carousel figure:nth-child(5) { transform: rotateY(144deg) translateZ(300px);}
#carousel figure:nth-child(6) { transform: rotateY(180deg) translateZ(300px);}
#carousel figure:nth-child(7) { transform: rotateY(216deg) translateZ(300px);}
#carousel figure:nth-child(8) { transform: rotateY(252deg) translateZ(300px);}
#carousel figure:nth-child(9) { transform: rotateY(288deg) translateZ(300px);}
#carousel figure:nth-child(10) { transform: rotateY(324deg) translateZ(300px);}

#carousel{
img{
	cursor: pointer;
	transition: all .5s ease;
}
img:hover{
  transform: scale(1.1,1.1);
}
}

@keyframes rotation{
	from{
		transform: rotateY(0deg);
	}
	to{
		transform: rotateY(360deg);
	}
}

`;

const Catalog = () => {
  return (
    <CatalogWrapper>
      <Container>
        <h2>Choose Your Content</h2>
        <img src={Options} alt="" />

        <div className="container">
          <div id="carousel">
            <figure><img src={Multicluster} alt="Multi-cluster" /></figure>
            <figure><img src={Node_agent} alt="Node Agent" /></figure>
            <figure><img src={Retries} alt="Retries" /></figure>
            <figure><img src={Correlate} alt="Correlate Event" /></figure>
            <figure><img src={Retry_deadline} alt="Retry Deadline" /></figure>
            <figure><img src={Singleton} alt="" /></figure>
            <figure><img src={Pre_provision} alt="Pre Provision" /></figure>
            <figure><img src={Denial} alt="L7 Denial" /></figure>
            <figure><img src={Circuit} alt="Circuit Breaker" /></figure>
            <figure><img src={Http_metrics} alt="HTTP Metrics" /></figure>
          </div>
        </div>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;

