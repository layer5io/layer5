import styled from "styled-components";

const ContactSection = styled.section`
  .card{
    cursor: pointer;
    display: block;
    width: 100%;
    height: 250px;
    margin: 10px auto;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: 0.5s ease-in-out all;
  }

  .card:hover{
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  }

  .cardsContainer{
    .image-container{
      width: 100%;
      height: 100%;
      display: inline-block;
      text-align: center;
      border-radius: 5px 5px 0 0;
      position: absolute;
    }

    .contact-image{
      height: 120px;
      background: #3c494f;
      
      .image {
        width: 80px;
        height: 100%;
      }
    }

    .text-and-button{
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .title{
      padding: 15px;
      text-align: center;
      text-decoration: none;
      font-size: 25px;
      font-weight: 500;
    }

    .para{
      width: 100%;
      font-size: 15px;
      padding: 0 10px;
      text-align: center;
    }

    .three-dots{
      display: block;
      float: right;
      width: 30px;
      height: auto;
      padding: 5px;
      background: turquoise;
      border-radius: 50%;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
  }

  @media only screen and (max-width: 912px){
    .container{
      grid-template-columns: 1fr 1fr;
      margin: auto 20px;
      width: 90%;
    }

    .title{
      font-size: 20px;
    }

    .text-and-button{
      right: 15px;
    }

    .three-dots{
      width: 25px;
    }
  }

  @media only screen and (max-width: 550px){
    .container{
      grid-template-columns: 1fr 1fr;
      margin: auto 20px;
      width: 90%;
    }

    .title{
      font-size: 20px;
    }

    .text-and-button{
      right: 15px;
    }

    .three-dots{
      width: 25px;
    }
  }

  @media only screen and (max-width: 480px){
    .container{
      grid-template-columns: 1fr;
      width: 95%;
      margin: auto 1px;
    }

    .title{
      font-size: 25px;
    }

    .text-and-button{
      right: 20px;
    }

    .three-dots{
      width: 30px;
    }
  }
`;

export default ContactSection;