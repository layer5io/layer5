import styled from "styled-components";
export const Blog = styled.div`
  div.badge-grid {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      max-width: 20%;
      margin: 1rem;
      align-items: center;
      > span {
        font-weight: bold;
      }
      > img {
        max-width: 150px;
      }
    }
  }  
  @media (max-width: 1200px) {
    div.badge-grid > div {
      max-width: 29%;
    }
  }
  @media (max-width: 992px) {
    div.badge-grid > div {
      max-width: 45%;
    }
  }
  @media (max-width: 670px) {
    div.badge-grid > div {
      max-width: 95%;
    }
  }
`;
