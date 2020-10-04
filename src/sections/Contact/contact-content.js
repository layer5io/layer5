import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Icons
import { BsThreeDots } from "react-icons/bs";

// Images
import Jobs_White from "../../images/contact/jobs_white.svg";
import Support_White from "../../images/contact/support_white.svg";
import Partner_White from "../../images/contact/partner_white.svg";
import Contact_White from "../../images/contact/contact_white.svg";

const Wrapper = styled.div`
  display: block;
  max-width: 1140px;
  margin: 120px auto;
  min-height: 100%;

  .container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
    width: 90%;
    margin: 0 auto;
  }

  .card{
    cursor: pointer;
    display: block;
    width: 100%;
    height: 250px;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    transition: 0.5s ease-in-out all;
  }

  .card:hover{
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  }

  .cardsContainer{
    .image-container{
      background-color: #3c494f;
      width: 100%;
      height: 120px;
      display: inline-block;
      text-align: center;
      border-radius: 5px 5px 0 0;

      .image {
        width: 80px;
        height: 100%;
      }
    }

    .text-and-button{
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100%;
      height: 100%;
      cursor: text;

      a{
        position: absolute;
        right: 20px;
      }
    }

    .title{
      color: black;
      text-align: center;
      webkit-text-decoration: none;
      text-decoration: none;
      font-size: 25px;
      font-weight: 500;
      cursor: text;
    }

    .para{
      width: 100%;
      font-size: 15px;
      padding: 20px 10px;
      text-align: center;
      cursor: text;
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

const ContactContent = () => {
  return (
    <Wrapper>
      <div className="container">

        <div className="card">
          <div className="cardsContainer">
            <Link to="/career" className="image-container">
            <img src={Jobs_White} alt="jobs_white" className="image" />
            </Link>
            <div className="text-and-button">
              <h3 className="title">Careers</h3>
              <Link to="/career">
                <BsThreeDots className="three-dots" />
              </Link>
            </div>
            <p className="para">I'm interested in career opportunities in Layer5</p>
          </div>
        </div>

        <div className="card">
          <div className="cardsContainer">
            <Link to="/support" className="image-container">
              <img src={Support_White} alt="support_white" className="image" />
            </Link>
            <div className="text-and-button">
              <h3 className="title">Support</h3>
              <Link to="/career">
                <BsThreeDots className="three-dots" />
              </Link>
            </div>
            <p className="para">I need assistance with my cloud native infrastructure.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardsContainer">
            <Link to="/partnership" className="image-container">
              <img src={Partner_White} alt="partner_white" className="image" />
            </Link>
            <div className="text-and-button">
              <h3 className="title">Partnership</h3>
              <Link to="/career">
                <BsThreeDots className="three-dots" />
              </Link>
            </div>
            <p className="para">I would like to establish a partnership with Layer5.</p>
          </div>
        </div>

        <div className="card">
          <div className="cardsContainer">
            <Link to="/about" className="image-container">
              <img src={Contact_White} alt="contact_white" className="image" />
            </Link>
            <div className="text-and-button">
              <h3 className="title">Contact</h3>
              <Link to="/career">
                <BsThreeDots className="three-dots" />
              </Link>
            </div>
            <p className="para">I have a general question or enquiry</p>
          </div>
        </div>

      </div>
    </Wrapper>
  )
};

export default ContactContent;
