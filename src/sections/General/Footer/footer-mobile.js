import styled from "styled-components";

export const MobileTypeContainer = styled.div`


  @media (max-width: 590px) {
    margin-bottom: ${({ isInputFocused }) => (isInputFocused ? "48%" : "0")};
    transition: margin-bottom 0.3s ease;
    position: relative;
    z-index: 1;
  }
`;
