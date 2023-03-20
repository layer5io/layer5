import styled from "styled-components";

export const TutorialsTableWrapper = styled.div`
  box-shadow:0 2px 16px rgba(0,0,0,0.2);
  
  table{
    display: table;
    width: 100%;
    height: auto;
    border-collapse: collapse;
    margin: 3.75rem auto;
    th {
      color: white;
    }
    th, tr {
      height: 3.75rem;
      vertical-align: middle;
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
      p{
        margin: 0.5rem 0;
      }
      span {
        display: block;
      }
    }
    }
`;
