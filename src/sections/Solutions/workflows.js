import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import OptimizeWorkflowIcon from "./images/optimize-workflow-icon.svg";
import ExecuteWithEfficiencyIcon  from "./images/execute-with-efficiency-icon.svg";
import ExecuteWithEfficiency from "./images/execute-with-efficiency.svg";
import OptimizeWorkFlow from "./images/optimize-workflow.svg";
import DeployIcon from "./images/deploy-icon.svg";
import DeployImg from "./images/deploy.svg";
import ArrowJoinIcon from "./images/chaos-icon.svg";
import BrainCircuitIcon from "./images/integration-icon.svg";
import CubeTreeIcon from "./images/patterns-icon.svg";
import DollarSignIcon from "./images/money-icon.svg";

const WorkflowSectionWrapper = styled.div`
    margin-bottom: 2.5rem;
    .section-title {
      text-align: center;
    }
    .cards {
            margin: 3.125rem 0 0;
            width: 100%;
            min-height: 21.25rem;
            padding: 0 1.25rem 5rem;
            border-radius: 1.5rem;

            @media screen and (max-width: 1000px) {
                  padding-bottom: 0;
            }
    }
    .content-container {
        padding: 1rem 2rem;
        background: ${props => props.theme.DarkTheme ? "linear-gradient(156deg, #293B43 -11.07%, rgba(41, 59, 67, 0.00) 135.21%);" : "linear-gradient(156deg,rgb(7, 221, 196) -11.07%,rgb(12, 29, 29) 135.21%);"}
        border-radius: 1.5rem;
        margin: 2rem 0;
        .row {
        align-items: center;
        }

        @media screen and (max-width: 1000px) {
          flex-direction: column;
          gap: 1.5rem;
        }
    }
.content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .card-header {
      display: flex;
      gap: 1rem;
        align-items: center;
        margin: 0 0 1.5rem 1rem;
        
        h2 {
          color: rgba(255, 255, 255, 0.8);
          font-size: 2rem;
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        @media screen and (max-width: 400px) {
              h2 {
                font-size: 1.7rem;
              }
        }
      }
    
        .circle {
            width: 3rem;
            height: 3rem;
            // background-color: ${props => props.theme.secondaryLightColorTwo};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: flex; 
            align-items: center;
            justify-content: center;
            svg { 
                width: 60%;
                height: 60%;
            }
            img {
              padding: 0.3rem 0px;
            }

            @media screen and (max-width: 400px) {
              width: 5rem;
        }
        }
    
    ul {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        line-height: 1.6;
    }
}
        .content-img {
    display: flex;
    height: 28.125rem;
    padding: 0rem 3.5rem;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
     @media screen and (max-width: 600px) {
       padding: 0 0.5rem;
    }
}
.bottom-card {
    background: ${props => props.theme.DarkTheme ? "linear-gradient(156deg, #293B43 -11.07%, rgba(41, 59, 67, 0.00) 135.21%);" : "linear-gradient(156deg,rgb(7, 221, 196) -11.07%,rgb(12, 29, 29) 135.21%);"}
    border-radius: 1.25rem;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    .card-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: rgba(235, 192, 23, 0.20);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }
    
    h4 {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        line-height: 1.4;
    }
    
    p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        line-height: 1.5;
        margin: 0;
    }
}
    @media screen and (max-width: 767px) {
        .bottom-cards{
          gap: 2rem;
        }
    }
`;

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    grid-gap: 30px;
    .card {
      box-shadow: rgb(0 0 0 / 5%) 2px 4px 2.5rem 0.5rem;
        border-radius: 1.25rem;
        background: ${props => props.theme.DarkTheme ? "linear-gradient(156deg, #293B43 -11.07%, rgba(41, 59, 67, 0.00) 135.21%);" : "linear-gradient(156deg,rgb(7, 221, 196) -11.07%,rgb(12, 29, 29) 135.21%);"}
        margin: 2px;
        padding: 2rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        .img-container{
          display: flex;
          flex-direction: center;
        }
        
        p {
            text-align: left;
            padding: 0px 0px;
            letter-spacing: 0;
            margin-top: 10px;
        }
        ul {
            text-align: left;
            li {
                color: rgba(255, 255, 255, 0.8);
                margin-bottom: 0.5rem;
            }
        }
        a:hover {
            color: ${props => props.theme.text};
        }

        .card-header {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin: 0 0 1.5rem 1rem;
        }
        h2 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 2rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .circle {
            width: 3rem;
            height: 3rem;
            // background-color: ${props => props.theme.secondaryLightColorTwo};
            border-radius: 3.125rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            svg { 
                width: 100%;
                height: 100%;
            }
            img {
              padding: 0.3rem 0px;
            }

            }
          @media screen and (max-width: 400px) {
                .circle {
                  width: 5rem;
                }

                h2 {
                  color: rgba(255, 255, 255, 0.8);
                  font-size: 1.7rem;
                }
          }
    }
    @media screen and (max-width: 974px) {
        grid-template-columns: 1fr;
        grid-gap: 20px;
        padding: 20px;
    }
    @media screen and (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;



const WorkflowSection = () => {
  return (
    <WorkflowSectionWrapper>
      <Container>
        <h1 className="section-title">Manage procedures and output conveniently</h1>
        <div className="cards">
          <Row>
            <CardsContainer>
              <div className="card">
                <div className="card-header">
                  <div className="circle">
                    <img src={OptimizeWorkflowIcon} />
                  </div>
                  <h2>Optimize Workflow</h2>
                </div>
                <ul>
                  <li>Streamline and accelerate workflow while you monitor infrastructure during controlled chaos tests and thus diminish cost.</li>
                  <li>Further use data insights gathered while monitoring to optimize your architecture.</li>
                </ul>
                <div className="img-container">
                  <img src={OptimizeWorkFlow} />
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="circle">
                    <img src={ExecuteWithEfficiencyIcon} />
                  </div>
                  <h2>Execute with efficiency</h2>
                </div>

                <ul>
                  <li>Spend less time learning and execute more with predefined cloud native patterns that allow accurate configuration and management of cloud nativees.</li>
                  <li>Reduce human error, adjust traffic routing, and de-provision services when no longer required.</li>
                </ul>
                <div className="img-container">
                  <img src={ExecuteWithEfficiency} />
                </div>
              </div>
            </CardsContainer>
          </Row>
        </div>
        <Row className="content-container">
          <Col lg={6} md={12} sm={12}>
            <div className="content">
              <div className="card-header">
                <div className="circle">
                  <img src={DeployIcon} />
                </div>
                <h2>Organize all deployments</h2>
              </div>
              <div>
                <ul>
                  <li>Utilize Meshery's user-friendly interface, to manage cloud native deployments by observing for and de-provisioning specific mesh configurations that are no longer required.</li>
                  <li>Capture and sync your configuration changes and cloud native events across various cloud native implementations making use of the unified data plane that MeshSync provides.</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="content-img">
              <img src={DeployImg} alt="content" />
            </div>
          </Col>

        </Row>

        <Row className="bottom-cards">
          <Col lg={3} md={6} sm={12}>
            <div className="bottom-card">
              <div className="card-icon">
                <img src={BrainCircuitIcon} />
              </div>
              <p>Integrate tools already in use and get rid of potential frustrations that could hinder maximum functionality.</p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="bottom-card">
              <div className="card-icon">
                <img src={DollarSignIcon} />
              </div>
              <p>Compare cost incurred in running scenarios and configurations to value of deployed resources.</p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="bottom-card">
              <div className="card-icon">
                <img src={CubeTreeIcon} />
              </div>
              <p>Predefined patterns provide design guides for configuration of cloud nativees to ensure resilience.</p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="bottom-card">
              <div className="card-icon">
                <img src={ArrowJoinIcon} />
              </div>
              <p>Incorporation of chaos engineering tools facilitates conduction of controlled chaos experiments</p>
            </div>
          </Col>
        </Row>
      </Container>
    </WorkflowSectionWrapper>
  );
};

export default WorkflowSection;
