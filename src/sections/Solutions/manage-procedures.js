import styled from "styled-components";
import React from "react";
import ExecuteWithEfficiencyIcon from "./images/execute-with-efficiency-icon.svg";
import ExecuteWithEfficiencyImage from "./images/execute-with-efficiency.svg";
import OptimizeWorkflowIcon from "./images/optimize-workflow-icon.svg";
import OptimizeWorkflowImage from "./images/optimize-workflow.svg";

const ManageProceduresWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${(props) => props.theme.blackToWhite || "transparent"};
  padding: 3rem 0;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 992px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 600px) {
    padding: 3rem 1rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Heading = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  text-align: center;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background: linear-gradient(156.33deg, #293b43 -11.07%, rgba(41, 59, 67, 0) 135.21%);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
`;

const CardImage = styled.img`
  width: 100%;
  margin-top: auto;
`;

const ManageProcedures = () => {
    return (
        <ManageProceduresWrapper>
            <Inner>
                <Heading>Manage procedures and output conveniently</Heading>
                <CardsWrapper>
                    <Card>
                        <CardHeader>
                            <img src={OptimizeWorkflowIcon} alt="Optimize Workflow" />
                            <CardTitle>Optimize workflow</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Streamline and accelerate workflow while you monitor infrastructure during controlled chaos tests and thus diminish cost.
                            </CardText>
                            <CardText>
                                Further use data insights gathered while monitoring to optimize your architecture.
                            </CardText>
                        </CardBody>
                        <CardImage src={OptimizeWorkflowImage} alt="Optimize Workflow Diagram" />
                    </Card>
                    <Card>
                        <CardHeader>
                            <img src={ExecuteWithEfficiencyIcon} alt="Execute with efficiency" />
                            <CardTitle>Execute with efficiency</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                Spend less time learning and execute more with predefined service mesh patterns that allow accurate configuration and management of service meshes.
                            </CardText>
                            <CardText>
                                Reduce human error, adjust traffic routing, and de-provision services when no longer required.
                            </CardText>
                        </CardBody>
                        <CardImage src={ExecuteWithEfficiencyImage} alt="Execute with Efficiency Diagram" />
                    </Card>
                </CardsWrapper>
            </Inner>
        </ManageProceduresWrapper>
    );
};

export default ManageProcedures;
