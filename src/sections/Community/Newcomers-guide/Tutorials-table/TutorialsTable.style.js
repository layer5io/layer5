import styled from "styled-components";

export const TutorialsTableWrapper = styled.div`
  box-shadow:0 2px 16px rgba(0,0,0,0.2);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    margin: 0 -1rem;
    border-radius: 0;
  }
  
  table{
    display: table;
    width: 100%;
    min-width: 600px;
    height: auto;
    border-collapse: collapse;
    margin: 3.75rem auto;
    
    @media (max-width: 768px) {
      margin: 1rem auto;
      min-width: 700px;
    }
    th {
      color: white;
    }
    th, tr {
      height: 3.75rem;
      vertical-align: middle;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    tr:nth-child(odd) {
      background-color: ${props => props.theme.grey212121ToWhite};
    }
    th {
      background-color: ${props => props.theme.secondaryColor};
    }
    th, td {
      border-bottom: 1px solid #F0F0F0;
      padding: 0 0.625rem;
      white-space: nowrap;
      
      @media (max-width: 768px) {
        padding: 0 0.5rem;
        font-size: 0.9rem;
      }
      
      @media (max-width: 480px) {
        padding: 0 0.375rem;
        font-size: 0.85rem;
      }
      
      p{
        margin: 0.5rem 0;
        @media (max-width: 768px) {
          margin: 0.25rem 0;
        }
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
      
      @media (max-width: 768px) {
        height: 22px;
      }
      
      @media (max-width: 480px) {
        height: 20px;
      }
    }
  }
  
  /* Scrollbar styling for better UX */
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.secondaryColor};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.primaryColor};
  }
`;
