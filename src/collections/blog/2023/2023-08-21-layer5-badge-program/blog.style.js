import styled from "styled-components";
export const Blog = styled.div`
  img.badge-modal{
    display: inline;
    float: right;
    margin: .5rem;
    max-width: 625px;
  }
  img.badge-modal::after {
    content: " ";
    clear: both;
    display: table;
  }
  div.badge-grid {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
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
        padding-top: 0.8rem;
      }
      > img {
        max-width: 225px;
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
