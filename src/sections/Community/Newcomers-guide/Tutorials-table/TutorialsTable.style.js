import styled from "styled-components";

export const TutorialsTableWrapper = styled.div`
  box-shadow: 0 2px 16px rgba(0,0,0,0.2);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    margin: 0 auto 2rem auto;
    
    @media (max-width: 375px) {
      margin: 0.5rem auto;
    }
    
    th {
      color: white;
      background-color: ${props => props.theme.secondaryColor};
    }
    
    th, tr {
      height: 3rem;
      vertical-align: middle;
      
      @media (max-width: 375px) {
        height: 2.5rem;
      }
    }
    
    tr:nth-child(odd) {
      background-color: ${props => props.theme.grey212121ToWhite};
    }
    
    th, td {
      border-bottom: 1px solid #F0F0F0;
      padding: 0 0.625rem;
      
      @media (max-width: 375px) {
        padding: 0 0.375rem;
      }
      
      p {
        margin: 0.25rem 0;
      }
      
      span {
        display: block;
      }
    }
  }
  
  .newBadge {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    
    img {
      height: 26px;
      width: auto;
      
      @media (max-width: 375px) {
        height: 20px;
      }
    }
  }
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondaryColor};
    border-radius: 4px;
  }
`;
