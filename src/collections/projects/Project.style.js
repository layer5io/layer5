import styled from "styled-components";

const ProjectWrapper = styled.div`
  color: #000;
  margin-top: 50px;
  .heading {
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .center {
    text-align: center;
    color: black;
  }
  .fixed-width {
    align: center;
    max-width: 700px;
  }
  .responsive-holder {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%;
  }
  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 80%;
    height: 80%;
  }
  .up {
    margin-top: -5%;
  }
  .max500 {
    max-width: 500px;
  }
  .center-col {
    margin: auto;
  }
  .bottom-tag {
    margin-bottom: 15px;
    padding-top: 25px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
  }
  .flex-iframe {
    display: flex;
    justify-content: center;
  }
  .smi-button {
    background: #ebc017;
    color: #fff;
    height: 40px;
    margin-top: 20px;
    &:hover {
      background: #ead07d;
      color: #333;
    }
  }
  .btn-title {
    color: #fff;
  }
  .image-hub-top {
    display: inline-block;
    width: 20%;
    margin-right: 20px;
  }
  .image-hub-iframe {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  }
  .image-hub-bottom {
    display: flex;
    height: auto;
    flex-direction: column;
    flex-flow: column;
    vertical-align: top;
    text-align: center;
    position: relative;
  }
  .smi-top-left {
    display: flex;
    align-items: center;
    text-align: center;
  }
  .smdp-top-left {
    display: inline-block;
    width: 30%;
    margin-right: 15px;
    margin-bottom: 15px;
  }
  .smdp-bottom-right {
    width: 30%;
    margin-left: 10px;
  }
  .smi-float {
    float: right;
    padding: 20px;
    text-align: center;
    @media only screen and (max-width: 568px) {
      float: inherit;
    }
    .float-button {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;

export default ProjectWrapper;