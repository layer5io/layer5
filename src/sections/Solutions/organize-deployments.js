import styled from "styled-components";
import React from "react";
import ChaosIcon from "./images/chaos-icon.svg";
import DeployIcon from "./images/deploy-icon.svg";
import DeployImage from "./images/deploy.svg";
import IntegrationIcon from "./images/integration-icon.svg";
import MoneyIcon from "./images/money-icon.svg";
import PatternsIcon from "./images/patterns-icon.svg";

const OrganizeDeploymentsWrapper = styled.section`
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

const MainCard = styled.div`
  background: linear-gradient(156.33deg, #293b43 -11.07%, rgba(41, 59, 67, 0) 135.21%);
  border-radius: 20px;
  padding: 3rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const MainCardContent = styled.div`
  flex: 1;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
`;

const CardBody = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 3.5rem; // To align with title
  margin: 0;
`;

const CardText = styled.li`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  list-style: disc;
`;

const MainCardImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SmallCard = styled.div`
  background: linear-gradient(156.33deg, #293b43 -11.07%, rgba(41, 59, 67, 0) 135.21%);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

const SmallCardIcon = styled.img`
  height: 40px;
  margin-bottom: 0.5rem;
`;

const SmallCardText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
`;


const OrganizeDeployments = () => {
  return (
    <OrganizeDeploymentsWrapper>
      <Inner>
        <MainCard>
          <MainCardContent>
            <CardHeader>
              <img src={DeployIcon} alt="Organize all deployments" />
              <CardTitle>Organize all deployments</CardTitle>
            </CardHeader>
            <CardBody>
              <CardText>
                Utilize Meshery's user-friendly interface, to manage service mesh deployments by observing for and de-provisioning specific mesh configurations that are no longer required.
              </CardText>
              <CardText>
                Capture and sync your configuration changes and service mesh events across various service mesh implementations making use of the unified data plane that MeshSync provides.
              </CardText>
            </CardBody>
          </MainCardContent>
          <MainCardImage>
            <img src={DeployImage} alt="Deployments Diagram" />
          </MainCardImage>
        </MainCard>
        <SmallCardsWrapper>
          <SmallCard>
            <SmallCardIcon src={IntegrationIcon} alt="Integration" />
            <SmallCardText>
              Integrate tools already in use and get rid of potential frustrations that could hinder maximum functionality.
            </SmallCardText>
          </SmallCard>
          <SmallCard>
            <SmallCardIcon src={MoneyIcon} alt="Compare cost" />
            <SmallCardText>
              Compare cost incurred in running scenarios and configurations to value of deployed resources.
            </SmallCardText>
          </SmallCard>
          <SmallCard>
            <SmallCardIcon src={PatternsIcon} alt="Predefined patterns" />
            <SmallCardText>
              Predefined patterns provide design guides for configuration of service meshes to ensure resilience.
            </SmallCardText>
          </SmallCard>
          <SmallCard>
            <SmallCardIcon src={ChaosIcon} alt="Chaos engineering" />
            <SmallCardText>
              Incorporation of chaos engineering tools facilitates conduction of controlled chaos experiments.
            </SmallCardText>
          </SmallCard>
        </SmallCardsWrapper>
      </Inner>
    </OrganizeDeploymentsWrapper>
  );
};

export default OrganizeDeployments;
