import React from "react";
import styled from "styled-components";

import { Container } from "../../reusecore/Layout";

const PlatformWrapper = styled.div`

margin: 6rem 0 9rem;

.platform-wrapper {
  box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.25);
  padding: 4rem;
  background-color: ${props => props.theme.secondaryColor};
  background: linear-gradient(360deg, hsla(173, 100%, 35%, 1) 7%, hsla(0, 0%, 0%, 1) 90%);
  margin-bottom: 0rem;
}
.powerupOptions {
  display: flex;
  flex-flow: row wrap;
  justify-content: center ;
  align-items: center;
  img {
    width: 50%;
  }
  p.caption {
    margin: 0rem 0rem 2.5rem 0rem;
    font-style: normal ;
  }
}

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

  
`;

const Platform = () => {
  return (
    <PlatformWrapper>
      <Container>
        <h2 className="heading">Choose Your Platform</h2>
        <div className="powerupOptions">
          <p className="caption">MeshMap integrates with Meshery's <a href="https://meshery.io/catalog">service mesh catalog</a>.</p>
        </div>
        <section className="platform-wrapper ">
          <div className="container">
            test
          </div>
        </section>
      </Container>
    </PlatformWrapper >
  );
};

export default Platform;

