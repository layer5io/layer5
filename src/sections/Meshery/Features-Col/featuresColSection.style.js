import styled from "styled-components";

export const FeaturesSectionWrapper = styled.section`
  margin-bottom: 60px;
  overflow: hidden;
`;

export const FeaturesSectionContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 22rem);
  grid-auto-rows: 1fr;
  justify-content: space-evenly;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  rect {
    transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    fill:  ${props => props.theme.grey313131ToGreenC9FCF6};  
  }
  path {
    transition: stroke 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    stroke: ${props => props.theme.green00D3A9ToGreen00B39F};
  }
  @media (max-width: 1198px) {
    grid-template-columns: repeat(auto-fill, 17rem);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 30px;
    justify-content: center;

    .feature-col {
      grid-column-end: span 2;
    }

    .feature-col:last-child {
      grid-column-start: 2;
    }
  }

  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FeatureBlockContainer = styled.div`
  box-shadow: 2px 4px 2.5rem 0.5rem ${(props) => props.theme.blackFiveToWhiteFive};
  background-color:	${props => props.theme.grey212121ToWhite};
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`;

export const TitleContainer = styled.div`
  text-align: center;
  padding: 10px;

  .light {
    font-weight: 500;
  }
`;

export const FeatureTitleInfoContainer = styled.div`
  text-align: center;
  height: 130px;

  .feature-block {
    font-size: 0.9rem;
    color: darkgray;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin: 0 0 0.625rem 0;
      padding-top: 15px;
      color: ${(props) => props.theme.text};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.greyDEE3DEToGreen3C494F};
    text-align: center;
    font-weight: 300;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;

export const FeatureInfoContainer = styled.div`
  flex-grow: 1;
  .table {
    .icon {
      object-fit: cover;
      height: 2.5rem;
      width: 2.5rem;
      vertical-align: top;
    }
    .service {
      color: ${(props) => props.theme.text};
      font-size: 16px;
      padding: 0 0 1.25rem 1.875rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
`;

export const CountBlockContainer = styled.div`
  text-align: center;
  
  .count,
  .count-desc {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  
  .count {
    font-weight: 700;
    margin-bottom: 0.625rem;
    color: ${(props) => props.theme.text};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .count-desc {
    font-size: 0.94rem;
    color: ${(props) => props.theme.greyDEE3DEToGreen3C494F};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
`;
