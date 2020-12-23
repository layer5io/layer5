import styled from "styled-components";

const WorkshopCardWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  margin-top: 20px;
  position: relative;
  align-items: center;
  border-top: 5px solid darkcyan;
  border-radius: 5px;

  .main {
    display: block;
    width: 100%;
    height: 400px;
  }

  .main-open {
    display: block;
    width: 100%;
    height: auto;
  }

  .title {
    text-align: center;
    font-size: 25px;
    padding-bottom: 10px;
  }

  .image-container {
    display: block;
    width: 100%;
    height: 50%;
    overflow: hidden;
  }

  .image-container-open {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    -webkit-transition: 0.5s ease-in-out all;
    transition: 0.5s ease-in-out all;
    box-shadow: 0 0 black;
  }

  .card-content {
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 10px;
  }

  .card-content-open {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  .para {
    padding-left: 10px;
    text-align: start;
  }

  @media only screen and (max-width: 992px) {
    .workshop-grid-card{
      padding-bottom: 20px;
    }
  }
`;
export default WorkshopCardWrapper;