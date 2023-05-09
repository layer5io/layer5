import styled from "styled-components";

const HowitworksWrapper = styled.section`
// ul li:last-child {
//     padding-bottom: 120px;
//   }

h2 {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

  ul li:first-child {
    padding-top: 60px;
  }
.scroll{
    position: sticky;
    top: calc(50vh - 249px);
}
.root {
    padding: 0 0;
  
    & .headerWrapper {
      & h2 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 32px;
        font-weight: 700;
        @media (max-width: 767px) {
          margin-bottom: 0;
        }
      }
  
      & p {
        max-width: 818px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  
  .contentContainer {
    display: flex;
    justify-content: space-between;
    position: relative;
  
    @media (max-width: 767px) {
      flex-direction: column;
    }

    & > ul {
      max-width: 470px;
      margin-left: 50px;
      padding-bottom: 50px;
  
      @media (max-width: 1120px) {
        margin-left: 64px;
      }
  
      @media (max-width: 1024px) {
        margin-left: 40px;
      }
  
      @media (max-width: 767px) {
        margin-left: 0;
      }
      @media (max-width: 500px) {
        padding-left: 0;
      }
    }
  }
  
  .diagram {
    width: 591px;
    max-width: 100%;
    position: sticky;
    top: calc(50vh - 249px);
    @media (max-width: 767px) {
        display: none;
      }
  }
  
  .features {
      
    & > li {
      list-style: none;
  
      & > div {
        list-style: none;
        padding-bottom: 150px;
  
        @media (max-width: 767px) {
          padding-top: 0;
          margin-bottom: 0;
          padding-bottom: 50px;
        }
      }
  
      &:last-child {
        & > div {
          padding-bottom: 600px;
          margin-bottom: -200px;
          @media (max-width: 767px) {
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      }
  
      &:first-child {
        & > div {
          padding-top: 108px;
          @media (max-width:  1120px) {
            padding-top: 64px;
          }
        }
      }
    }
  }
   

`;

export default HowitworksWrapper;
