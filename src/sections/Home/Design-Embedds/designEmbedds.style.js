import styled from "styled-components";
import background from "../../../assets/images/embed-whiteboard/background.svg";

const DesignEmbedWrapper = styled.section`
  color: white;
  text-align: center;
  height: 100%;


  .embed-container {
    padding: 2rem;
    border-radius: 0.5rem;
    width: 90%;
    height: fit-content;
    background-color: #000;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
     //position: relative;
    // overflow: hidden;
    box-shadow: 0 0 ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
    // transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    // z-index: 3;
  }

  //.embed-container::before {
  //  content: '';
  //  width: 35rem;
    // height: 100%;
    // width: 100%;
    //height: 25rem;
    //border-radius: 30.625rem;
  //  background: #00B39F;
  //  filter: blur(400px);
  //  position: absolute;
  //  left: 50%;
  //  top: 50%;
  //  transform: translate(-50%, -50%);
  //}

  //#embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9 {
  //  height: 26rem;
  //  width: 100%;
  //  // height: 100%;
  //  z-index: 10;
  //  // width: 100%;
  //}

  .warped-vectors {

    //z-index: 4;
  }
  
  .heading{
    //margin-top: 50px;
    height: fit-content;
  }

  .embed-highlight {
    color: white;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    background: rgba(0, 179, 159, 0.35);
    font-weight: bold;
    //margin-left: 5px;
  }

  .browser-container {
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: center;
    width: 100%;
    padding: 2px 2px 1px 2px;
    background-color: #121212;
    border-radius: 0.48294rem 0.48294rem 0 0;
  }

  .top-bar {
    width: 100%;
    border-radius: 0.48294rem 0.48294rem 0 0;
    background: rgba(38, 43, 47, 0.80);
    backdrop-filter: blur(15.453125953674316px);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .browser-buttons {
    display: flex;
    flex-direction: row;
  }

  .browser-button {
    margin-right: 5px;
  }

  .browser-close {

    width: 10px;
    height: 10px;
    border-radius: 50%;
    fill: #EE6A5F;
    stroke-width: 0.386px;
    stroke: #CE5347;
    box-shadow: 0 0 4.63594px 0 #EC6D62 inset;

  }

  .browser-min {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    fill: #F5BD4F;
    stroke-width: 0.386px;
    stroke: #D6A243;
    box-shadow: 0 0 4.63594px 0 #F5C451 inset;

  }

  .browser-max {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    fill: #61C454;
    stroke-width: 0.386px;
    stroke: #58A942;
    box-shadow: 0 0 4.63594px 0 #68CC58 inset;
  }

  .browser-body {
    display: flex;
    flex-direction: row;
    //align-items: center;
    justify-content: space-between;
    padding: 20px;
    flex-wrap: wrap;
    //width: 100%;
    align-items: stretch; /* Ensures children stretch to fill the container */
    height: 100%;
  }

  .skeleton-lines {
    height: 10px;
    width: 100%;
    border-radius: 20px;
    margin-top: 5px;
    background-color: #808080;
  }

  .body-left {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 15px;
    width: 100%;
    //align-items: center;
    justify-content: space-between;

    .left-top {
      display: flex;
      flex-direction: row;

      .left-top-big {
        flex: 2;
        height: 8rem;
        width: 10rem;
        background-color: #4D4D4D;
        border-radius: 5px;
      }

      .left-top-small {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        margin-left: 10px;
      }

    }
  ;

    .left-middle {
      margin-top: 15px;
    }

    .left-bottom {
      margin-top: 15px;
    }

  }


  .body-right {
    display: flex;
    flex-direction: column;
    flex: 2;
    //align-items: center;
    //justify-content: space-between;
    //align-items: ;
    .body-right-top {
      height: 20px;
      //flex: 2;
      margin-bottom: 10px;
    }

    .body-right-bottom {
      flex: 2;

      img {
        height: 100%;
        width: 100%;
        min-width: 500px;
      }
    }

  }


  @media (max-width: 970px) {
    
    #embedded-design-142f0054-d9ae-4352-8618-887104a81928 {
      height: 15rem !important;
      width: 100% !important;
      min-width: 200px !important;
    }
    
    .body-left{
      margin-right: 0;
    }
    
    .left-bottom{
      visibility: hidden;
      height: 0;
    }
    .body-left{
      visibility: hidden;
      height: 0;
      //width: 0;
    }
  
    .body-right-top{
      visibility: hidden;
    }

    //.body-right {
    //  margin-top: 30px !important;
    //}

  }
  
  #embedded-design-142f0054-d9ae-4352-8618-887104a81928{
    height: 26rem;
    width: 100%;
  }



`;

export default DesignEmbedWrapper;