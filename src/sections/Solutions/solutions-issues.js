import React from "react";
import styled from "styled-components";
import { Container } from "../../reusecore/Layout";

const IssuesSectionWrapper = styled.section`
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

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const IssuesHeading = styled.h2`
  font-family: "Qanelas Soft", sans-serif;
  font-weight: 600;
  font-size: 56px;
  line-height: 64px;
  letter-spacing: 0;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    text-align: center;
    font-size: 48px;
    line-height: 56px;
  }
`;

const Columns = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Column = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const IssuesText = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0;
  vertical-align: middle;
  color: ${({ theme }) => theme.whiteToBlack || "#ffffff"};
  margin: 0;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 26px;
  }
`;

const IssuesSection = () => {
  const [isClient, setClient] = React.useState(false);
  React.useEffect(() => {
    setClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <IssuesSectionWrapper>
      <Container>
        <Inner>
          <IssuesHeading>The issues</IssuesHeading>

          <Columns>
            <Column>
              <IssuesText>
                On the one hand, cloud adoption offers the ability to quickly scale resources up or down, yet enterprises might overprovision resources due to a lack of proper monitoring and scaling strategies.
              </IssuesText>
              <IssuesText>
                Also, very often, cloud resources are provisioned but not actively utilized, which creates unwanted room for waste without proper resource management and much-needed de-provisioning, thus increasing running cost of these resources.
              </IssuesText>
            </Column>

            <Column>
              <IssuesText>
                On some other occasions, some professionals have tools that already enable certain functionalities that ease workflow and implementation, and a lack of integration of these platforms can lead to further frustrations when implementing desired solutions. All of this can lead to higher, avoidable, and unnecessary costs.
              </IssuesText>
              <IssuesText>
                Additionally, cloud environments are often distributed, dynamic, and composed of various interconnected services. This level of complexity can make it challenging to both identify the root cause of incidents and effectively coordinate controlled chaos experiments to test the resilience of cloud infrastructure.
              </IssuesText>
            </Column>
          </Columns>
        </Inner>
      </Container>
    </IssuesSectionWrapper>
  );
};

export default IssuesSection;
