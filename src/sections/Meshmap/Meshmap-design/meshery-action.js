import React from "react";
import styled from "styled-components";

const MesheryWrapper = styled.div`

.blocks {
  display: flex;
  padding-bottom: 5rem;
}

.block {
  min-height: 100px;
  width: 50%;
  width: calc(60% + 2rem);
}

.block--left {
  background-color: BLACK;
  h1, p{
    text-align: center;
    color: white;
  }
  p{
    padding: 1.1rem 2rem 0 4rem;
  }
}

.block--right {
  background-color: #00b39f;
  height: 20rem;
  h1, p{
    text-align: center;
    color: white;
  }
  p{
    padding: 1.1rem 0;
  }
}

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

  @media screen and (max-width: 991px) {
    .block--left, .block--right {
      width: 50%;
      margin: 0;
      clip-path: none;
      h1{
        text-align: center;
        color: white;
      }
      p{
        color: white;
        width: 100%;
        padding: 1rem;
      }
    }
}


@media only screen and (max-width: 768px) {

  .blocks{
    flex-direction: column;
    gap: 5rem;
    width: 100%;
    align-items: center;

     .block--left, .block--right {
      width: 100%;
      height: 20rem;
     }
     }
}

@media only screen and (max-width: 420px) {
 .blocks{
  gap: 7rem;
 }
}

`;

const MesheryAction = () => {
  return (
    <MesheryWrapper>
      <h2 className="heading">See MeshMap In-Action</h2>
      <p className="caption">
        Recently on-stage at...
      </p>

      <div className="blocks">
        <div className="block block--right">
          <h1>ServiceMeshCon 22</h1>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/yvqn6ckO7BI" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
        </div>
        <div className="block block--left">
          <h1>DockerCon 22</h1>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3DPZafR8VWM" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
        </div>
      </div>
    </MesheryWrapper >
  );
};

export default MesheryAction;

