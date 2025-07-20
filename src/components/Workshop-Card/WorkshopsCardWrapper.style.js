import styled from "styled-components";

const WorkshopCardWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 1.25rem;
  position: relative;
  align-items: center;
  border-top: 0.3125rem solid darkcyan;
  border-radius: 0.3125rem;

  .main {
    display: block;
    width: 100%;
    height: 25rem;
    transition: all 0.25s ease-in;
  }

  .main-open {
    display: block;
    width: 100%;
    height: auto;
    transition: all 0.25s ease-in;
  }

  .title {
    text-align: center;
    font-size: 1.25rem;
    padding-bottom: 0.625rem;
  }

  .image-container {
    display: block;
    width: 100%;
    height: 65%;
    overflow: hidden;
  }

  .image-container-open {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 1.25rem;
    
    img{
      object-fit: contain !important;
    }
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.25s ease-in;
    box-shadow: 0 0 black;

    .gatsby-image-wrapper,.old-gatsby-image-wrapper {
      height: 90%;
      max-height: 40rem;

    }
  }

  .card-content {
    display: block;
    width: 100%;
    padding: 1rem;
    transition: all 0.25s ease-in;
  }

  .card-content-open {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 0.625rem;
    transition: all 0.25s ease-in;
  }

  .para {
    padding-left: 0.625rem;
  }

  @media only screen and (max-width: 62rem) {
    .workshop-grid-card {
      padding-bottom: 1.25rem;
    }
  }
`;
export default WorkshopCardWrapper;
