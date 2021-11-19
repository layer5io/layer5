import styled from "styled-components";

const TocPaginationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 3rem 2rem 4rem 2rem;

  @media screen and (max-width: 540px) {
    margin: 0 0 2rem 0;
    flex-flow: row wrap;
    gap: 0.3rem;
  }
`;

export default TocPaginationWrapper;
