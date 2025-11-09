import styled from "styled-components";
import React from "react";
import { Container } from "../../reusecore/Layout";
import { ReactComponent as MesheryLogo } from "./images/meshery-logo.svg";
import { ReactComponent as MeshsyncLogo } from "./images/meshsync.svg";
import { ReactComponent as ServiceMeshLogo } from "./images/service-mesh.svg";
import { ReactComponent as KanvasLogo } from "./images/kanvas-icon.svg";
import { ReactComponent as CNPLogo } from "./images/smp.svg";
import { ReactComponent as NighthawkLogo } from "./images/nighthawk-logo.svg";

const MinimizeComplexitySectionWrapper = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.blackToWhite || "transparent"};
  padding: 6rem 2rem;
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
`;

const MainHeading = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0 0 3rem 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const DescriptionText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 26px;
  }
`;

const ProductsHeading = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 2rem 0 1rem 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const ProductIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    width: 48px;
    height: 48px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  @media (max-width: 430px) {
    flex-wrap: wrap;
    gap: 0.75rem;
    
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;

const RightHeading = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0 0 2rem 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

const ChecklistItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const CheckIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.grey404040ToGreen3C494F};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ChecklistText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

// Custom SVG checkmark
const CheckmarkSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      fill="#00B39F"
    />
  </svg>
);

const MinimizeComplexitySection = () => {
  return (
    <MinimizeComplexitySectionWrapper>
      <Container>
        <Inner>
          <MainHeading>
                        Minimize complexity and<br />
                        automate workflows
          </MainHeading>

          <ContentWrapper>
            <LeftColumn>
              <DescriptionText>
                                Meshery helps users weigh the value of their cloud native deployments against the
                                overhead cost incurred in running different deployment scenarios and different
                                configurations. This empowers them with much needed information they require
                                to optimize decision making for the business.
              </DescriptionText>

              <DescriptionText>
                                Predefined patterns and profiles are already setup to make the configuration of
                                service mesh and its features simpler both to understand and execute. This
                                reduces the learning curve required to implement complex service mesh
                                functionalities. Less time spent learning means appropriate utilization of
                                resources which further minimizes incurred cost.
              </DescriptionText>

              <ProductsHeading>
                                Layers Products and Tools Deployed
              </ProductsHeading>

              <ProductIcons>
                <a href="https://meshery.io" target="_blank" rel="noopener noreferrer">
                  <MesheryLogo />
                </a>
                <a href="https://layer5.io/cloud-native-management/kanvas" target="_blank" rel="noopener noreferrer">
                  <KanvasLogo />
                </a>
                <a href="https://docs.meshery.io/v0.6/concepts/architecture/meshsync" target="_blank" rel="noopener noreferrer">
                  <MeshsyncLogo />
                </a>
                <a href="https://service-mesh-patterns.github.io/service-mesh-patterns/" target="_blank" rel="noopener noreferrer">
                  <ServiceMeshLogo />
                </a>
                <a href="https://smp-spec.io/" target="_blank" rel="noopener noreferrer">
                  <CNPLogo style={{ width: "65px", height: "70px" }}/>
                </a>
                <a href="https://getnighthawk.dev/" target="_blank" rel="noopener noreferrer">
                  <NighthawkLogo />
                </a>
              </ProductIcons>
            </LeftColumn>

            <RightColumn>
              <RightHeading>
                                Expect efficiency when you apply our suggestions and utilize our
                                toolset with respect to incident management and chaos
                                experiment discharge. Achieve optimization as you:
              </RightHeading>

              <ChecklistItem>
                <CheckIcon>
                  <CheckmarkSVG />
                </CheckIcon>
                <ChecklistText>
                                    Make use of our established service mesh patterns since they promote best
                                    practices for handling incidents and failures and will guide you on how to
                                    design and configure your service mesh for optimal resilience.
                </ChecklistText>
              </ChecklistItem>

              <ChecklistItem>
                <CheckIcon>
                  <CheckmarkSVG />
                </CheckIcon>
                <ChecklistText>
                                    Find in our playbooks, step-by-step procedures for identifying, diagnosing,
                                    and resolving common incidents that can occur in service mesh
                                    environments.
                </ChecklistText>
              </ChecklistItem>

              <ChecklistItem>
                <CheckIcon>
                  <CheckmarkSVG />
                </CheckIcon>
                <ChecklistText>
                                    Use Meshery's integration of the Chaos Toolkit and our readily available
                                    chaos experiment template to mitigate cost when you streamline and
                                    speed up workflow while defining and executing controlled chaos
                                    experiments on your service mesh deployments.
                </ChecklistText>
              </ChecklistItem>

              <ChecklistItem>
                <CheckIcon>
                  <CheckmarkSVG />
                </CheckIcon>
                <ChecklistText>
                                    Accurately monitor applications and infrastructure during chaos tests.
                                    Using data-driven insights gained from monitoring, you are able to observe
                                    how the system behaves under stress and when failures occur and then
                                    make improvements in your architecture using this information.
                </ChecklistText>
              </ChecklistItem>
            </RightColumn>
          </ContentWrapper>
        </Inner>
      </Container>
    </MinimizeComplexitySectionWrapper>
  );
};

export default MinimizeComplexitySection;
