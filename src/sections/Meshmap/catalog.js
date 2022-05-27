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
	transform: rotateY(36deg) translateZ(382px);
  }
  .slide.three {
	transform: rotateY(72deg) translateZ(382px);
  }
  .slide.four {
	transform: rotateY(108deg) translateZ(382px);
  }
  .slide.five {
	transform: rotateY(144deg) translateZ(382px);
  }
  .slide.six {
	transform: rotateY(180deg) translateZ(382px);
  }
  .slide.seven {
	transform: rotateY(216deg) translateZ(382px);
  }
  .slide.eight {
	transform: rotateY(252deg) translateZ(382px);
  }
  .slide.nine {
	transform: rotateY(288deg) translateZ(382px);
  }
  .slide.ten {
	transform: rotateY(324deg) translateZ(382px);
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
        <h2>Choose Your Content</h2>
        <img src={Options} alt="" />

   	 <div className="container">
    	 <div id="carousel">
		 <div className="slide one">
      	   <img src={Multicluster} />
      	 </div>
      	 <div className="slide two">
      	   <img src={Node_agent} />
      	 </div>
      	 <div className="slide three">
      	   <img src={Retries} />
      	 </div>
      	 <div className="slide four">
      	   <img src={Correlate} />
      	 </div>
   		 <div className="slide five">
   		   <img src={Retry_deadline} />
   		 </div>
   		 <div className="slide six">
   		   <img src={Singleton} />
   		 </div>
   		 <div className="slide seven">
   		   <img src={Pre_provision} />
   		 </div>
   		 <div className="slide eight">
   		   <img src={Denial} />
   		 </div>
   		 <div className="slide nine">
   		   <img src={Circuit} />
   		 </div>
            <div className="slide ten">
   		   <img src={Http_metrics} />
    	</div>
   		</div>
  	</div>
      </Container>
    </CatalogWrapper>
  );
};

export default Catalog;

