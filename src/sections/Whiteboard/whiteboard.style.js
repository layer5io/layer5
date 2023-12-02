import styled from "styled-components";

const WhiteboardWrapper = styled.div`
  height: 100%;

  .heading-container {
    z-index: 3;
    width: 100%;
    overflow: hidden;
    position: relative;
    //height: 30rem;
    //padding: 100px 100px 0 100px;
    padding: 100px;

    .section-title {
      text-align: left;
    }
    
    #whiteboard-svg{
      //position: fixed;
      //top: 0;
      //left: 50%;
      //transform: translateX(-50%);
      transition: transform 0.3s ease-out;
      transform-origin: top center;
      min-width: 400px;
    }

    h2 {
      margin: 0;
      margin-bottom: 10px;
    }

    .whiteboard-heading {
      color: white !important;
    }

    .heading-image {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      margin: 0 auto;
    }

  }

  .heading-container::before {
    content: '';
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: #00B39F;
    filter: blur(150px);
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: -3;
  }


  .whiteboard-use-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .use-heading {
      color: white !important;
      font-weight: bold;

      .highlighted-text {
        color: white;
        padding: 0 0.5rem;
        border-radius: 0.5rem;
        background: rgba(0, 179, 159, 0.35);
        font-weight: bold;
      }

    }

    .collaboration_display {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      margin: 0 10px;
      align-items: center;
      justify-content: center;

      .display-container {
        margin-bottom: 40px;
      }

      .image-container {
        height: 15rem;
        width: 100%;
        border-radius: 0.5rem;
        border: 1px solid var(--grey-light, #A0AAAA);
        margin: 0 auto 10px auto;
        //width: 100%;
      }

    }

    .image-heading {
      font-weight: bold;
      font-size: 1.2rem;
    }

  }

  @media (max-width: 500px){
    .heading-image {
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .whiteboard-text{
      text-align: center; 
    }
    
    .section-title{
      margin-bottom: 15px;
    }
    
  }




`;

export default WhiteboardWrapper;