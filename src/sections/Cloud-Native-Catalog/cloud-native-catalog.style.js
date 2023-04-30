import styled from "styled-components";

export const CloudNativeCatalogWrapper = styled.div`
  .page-header-section {
    min-height: 30rem;
    background: rgb(71,126,150);
    background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    padding: 0 6rem;
    justify-content: center;
    h1 {            
      color: white;
    }
    .catalogIcon{
      height: 12rem;
      width: auto;
    }
    .col {
      display: flex;
      align-items: center;

    }
    .catalog-image-col {
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      justify-content: center;
      align-items: center;
            
      .catalogIcon{
        height: 5rem;
        width: auto;
      }
      img {
        margin: auto;
        height: 50%;
        width: 50%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .page-header-section {
      min-height: 20rem;
    }
  }
`;
