
import styled, { keyframes } from "styled-components";

import {
  AccordionItemHeading,
  AccordionItemButton,
  Accordion,
  AccordionItem,
  AccordionItemPanel,
} from "react-accessible-accordion";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const AccordionWrapper = styled(Accordion)``;

export const AccordionItemWrapper = styled(AccordionItem)``;

export const OpenIcon = styled.div``;
export const CloseIcon = styled.div`
  opacity: 0;
`;

export const AccordionTitleWrapper = styled(AccordionItemHeading)`
  > div {
    display: flex;
    text-align: left;
    cursor: pointer;
    position: relative;
    &[aria-expanded='false'] {
      ${OpenIcon} {
        opacity: 0;
      }
      ${CloseIcon} {
        opacity: 1;
      }
    }
    &[aria-expanded='true'] {
      background: ${props => props.theme.grey8C8C8CToGreen1E2117};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  &:focus {
    outline: none;
  }
  * {
    flex-grow: 1;
  }
`;
export const AccordionItemButtonWrapper = styled(AccordionItemButton)`
  padding: 0.625rem 1.5rem 0.625rem 1.5rem;
  `;

export const AccordionBodyWrapper = styled(AccordionItemPanel)`
    overflow: hidden;
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows ease 1.0s;

  > .inner {
      min-height: 0;
      visibility: visible;
      opacity: 1;
      transition: opacity 0.35s;
  }

  &[hidden] {
      grid-template-rows: 0fr;

      > .inner {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.35s, visibility 0s 0.35s;
      }
  }

  // animation: 0.35s ${fadeIn} ease-in;
  // &.accordion__body--hidden {
  //   animation: 0.35s ${fadeIn} ease-in;
  // }

`;

export const IconWrapper = styled.div`
  position: relative;
  ${OpenIcon},
  ${CloseIcon}{
    position: absolute;
    top: 60%;
    right: 0;
    transform: translateY(-50%);
    transition: 0.25s ease-in-out;
    color: black;
  }
`;
