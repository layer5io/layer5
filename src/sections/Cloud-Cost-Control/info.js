import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "../../reusecore/Layout";
import mesheryLogo from "../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import meshsyncLogo from "./images/meshsync.svg";
import serviceMeshLogo from "./images/service-mesh.svg";
// import Button from "../../reusecore/Button";

const SolutionsDetailsWrapper = styled.div`
  margin-top: 4rem;
    h2 {
      margin-bottom: 2rem;
    }
    .solutions-details {
    .list{
        h1{
         margin-bottom: 1.5rem;
          @media screen and (min-width: 770px) {
            width: 50%;
          }
        }
        padding: 1.875rem 0px;
        margin-top: 4rem;
        .text{
          p{
            color: ${props => props.theme.tertiaryColor};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          }
        }
        .tools{
             p{
                font-weight: bold;
             }

            .logos {
                display: flex;
                gap: 0.5rem;
                margin: 0 0 1rem 0;

                img{
                    weight: 2rem;
                    height: 2rem;
                }   
            }
        }
        .listed{
            text-align: left;
            .table{
                .icon{
                    object-fit: cover;
                    height: 2.5rem;
                    width: 2.5rem;
                    vertical-align: top;
                }
                svg {
                    rect {
                        fill:  ${props => props.theme.grey313131ToGreenC9FCF6}; 
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); 
                      }
                    path {
                        stroke: ${props => props.theme.green00D3A9ToGreen00B39F};
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                      }
                }
                .details-para{
                    color: ${props => props.theme.tertiaryColor};
                    font-size: 16px;
                    padding: 0 0 1.25rem 1.875rem;
                    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                    h4{
                        font-weight: 600;
                        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                    }
                }
            }
        }
    }
    }
`;

const SolutionsDetails = () => {
  return (
    <SolutionsDetailsWrapper>
      <div className="solutions-details">
        <Container>
          <h1>The Issues</h1>
          <Row className="row">
            <Col className="col header__detail" md={6}>
              <p>On the one hand, cloud adoption offers the ability to quickly scale resources up or down, yet enterprises might overprovision resources due to a lack of proper monitoring and scaling strategies.</p>
              <p>Also, very often, cloud resources are provisioned but not actively utilized, which creates unwanted room for waste without proper resource management and much-needed de-provisioning, thus increasing running cost of these resources.</p>
            </Col>
            <Col className="col catalog" $md={6}>
              <p>
                            On some other occasions, some professionals have tools that already enable certain functionalities that ease workflow and implementation, and a lack of integration of these platforms can lead to further frustrations when implementing desired solutions. All of this can lead to higher, avoidable, and unnecessary costs.
              </p>
              <p>
                            Additionally, cloud environments are often distributed, dynamic, and composed of various interconnected services. This level of complexity can make it challenging to both identify the root cause of incidents and effectively coordinate controlled chaos experiments to test the resilience of cloud infrastructure.
              </p>
            </Col>
          </Row>
          <div className="list">
            <h1>Minimize complexity and automate workflows</h1>
            <Row>
              <Col $lg={6} $md={6} $sm={12}>
                <div className="text">
                  <p>Meshery helps users weigh the value of their cloud native deployments against the overhead cost incurred in running different deployment scenarios and different configurations. This empowers them with much needed information they require to optimize decision making for the business.Predefined patterns and profiles are already setup to make the configuration of cloud native infrastructure and its features simpler both to understand and execute. This reduces the learning curve required to implement complex cloud native infrastructure functionalities. Less time spent learning means appropriate utilization of resources which further minimizes incurred cost.</p>
                </div>
                <div className="tools">
                  <p>LAYER5 PRODUCTS AND TOOLS DEPLOYED</p>
                  <div className="logos">
                    <a href="https://layer5.io/cloud-native-management/meshery">
                      <img src={mesheryLogo} />
                    </a>
                    <img src={serviceMeshLogo} />
                    <img src={meshsyncLogo} />
                  </div>
                </div>

              </Col>
              <Col $lg={6} $md={6} $sm={12}>
                <div className="listed">
                  <p>Expect efficiency when you apply our suggestions and utilize our toolset with respect to incident management and chaos experiment discharge. Achieve optimization as you</p>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="details-para">
                                        Make use of our established cloud native infrastructure patterns since they promote best practices for handling incidents and failures and will guide you on how to design and configure your cloud native infrastructure for optimal resilience.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="details-para">
                                        Find in our playbooks, step-by-step procedures for identifying, diagnosing, and resolving common incidents that can occur in cloud native infrastructure environments.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="details-para">
                                        Use Meshery's integration of the Chaos Toolkit and our readily available chaos experiment template to mitigate cost when you streamline and speed up workflow while defining and executing controlled chaos experiments on your cloud native infrastructure deployments.
                        </td>
                      </tr>
                      <tr>
                        <td className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" fill="#C9FCF6" rx="5"/><path stroke="#00B39F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M28 14L17 25L12 20"/></svg></td>
                        <td className="details-para">
                                        Accurately monitor applications and infrastructure during chaos tests. Using data-driven insights gained from monitoring, you are able to observe how the system behaves under stress and when failures occur and then make improvements in your architecture using this information.
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </SolutionsDetailsWrapper>
  );
};

export default SolutionsDetails;
