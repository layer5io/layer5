import React from "react";
import styled, { css } from "styled-components";

const ContainerWrapper = styled.div`

    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    @media (min-width: 576px) {
        max-width: 100%;
    }
    @media (min-width: 768px) {
        max-width: 720px;  
    }
    @media (min-width: 992px) {
        max-width: 960px; 
    }
    @media (min-width: 1200px) {
        max-width: 1170px; 
    }

    ${props => props.fluid && css`
        max-width: 100%; 
    `}
    a.mute {
    text-decoration: none;
    color: ${(props) => props.theme.tertiaryColor};
    &:hover {
      color: ${(props) => props.theme.keppelColor};
    }
  }
  a.highlight {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.grey232323ToGreyEEEEEE};
    border-radius: 8px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    &:hover {
      color: ${(props) => props.theme.keppelColor};
    }
  }
  .highlight {
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.grey232323ToGreyEEEEEE};
    border-radius: 8px;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Container = ({ children, ...props }) => {
  return (
    <ContainerWrapper {...props}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
