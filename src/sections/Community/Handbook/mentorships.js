import React from "react";
import { Container, Row, Col } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import styled from "styled-components";
import Button from "../../../reusecore/Button";
import TOC from "../../../components/handbook-navigation/index";
import { programs_data } from "./programs-data";
import TocPagination from "../../../components/handbook-navigation/TocPagination";

const ConductWrapper = styled.div`

    padding: 0 5rem 3rem 20rem;
    margin-top: -36rem; 
    .explain-2{
      padding: 25px 0px;
      .text{
          padding: 1.25rem 1.25rem 0px 1.25rem;
          h2{
              font-weight: 700;
              font-size: 40px;
              padding: 1.25rem 0px;
          }
          p{
              color: ${props => props.theme.tertiaryColor};
              
          }
      }
      img{
          padding-top:5rem;
          height: auto;
          width: 23rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
      }
      Button{
          margin: 1.25rem 0px;
          color: white;
      }
  }
  @media only screen and (max-width: 750px){
      margin-top: -2rem;
      margin-left: 0;
      padding: 1rem 1.5rem;

      .explain-2 div {
        flex-direction: column-reverse;
      }
  
  }

  @media only screen and (max-width: 475px){
        margin-top: -2rem;
        margin-left: 0rem;
      } 
  }

  @media only screen and (min-width: 765px){
  .first {
    .list{
      display:flex;
      flex-wrap:wrap
    }
    #col1 {
      order: 2;
    }
    #col2 {
      order: 1;
    }
       }
      }

`;


const MentorshipPrograms = () => {
  const data = React.useMemo(() => programs_data);
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Mentorship Programs</h1>
      </div>
      <TOC />
      <ConductWrapper>
        <Container>

          {data.map((data) => {
            const { id, name, description, buttonLink, imageLink, imagePosition } = data;
            return (
              <div className={imagePosition} key={id}>
                <div className="explain-2 list" key={id}>
                  <Row>
                    <Col lg={6} md={6} sm={12} id="col1">
                      <div className="text">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <Button primary id="learn" type="button" title="Learn More" url={buttonLink} />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} id="col2">
                      <img src={imageLink} alt="logo" />
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}

        </Container>
        <TocPagination />
      </ConductWrapper>
    </HandbookWrapper>
  );
};

export default MentorshipPrograms;
